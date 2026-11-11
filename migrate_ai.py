import json
import os
import shutil

def migrate(source, target):
    if not os.path.exists(source):
        print(f"Source not found: {source}")
        return

    # Create target directory
    os.makedirs(os.path.dirname(target), exist_ok=True)

    # Copy source to target
    shutil.copy2(source, target)

    # Update redirects.json
    source_url = "/" + source.replace("docs/", "").replace("/index.md", "").replace(".md", "")
    target_url = "/" + target.replace("docs/", "").replace("/index.md", "").replace(".md", "")
    
    with open('docs/.vitepress/redirects.json', 'r+', encoding='utf-8') as f:
        data = json.load(f)
        data[source_url] = target_url
        data[source_url + "/"] = target_url + "/"
        f.seek(0)
        json.dump(data, f, indent=2, ensure_ascii=False)
        f.truncate()
    
    # Remove original
    os.remove(source)
    print(f"Migrated {source} to {target}")

# List of migrations
migrations = [
    ("docs/ai/gemini-cli/basic-usage/index.md", "docs/ai-toolbox/cli/gemini-cli/basic-usage/index.md"),
    ("docs/ai/agent-skills/index.md", "docs/ai-toolbox/agent/agent-skills/index.md")
]

for src, dst in migrations:
    migrate(src, dst)
