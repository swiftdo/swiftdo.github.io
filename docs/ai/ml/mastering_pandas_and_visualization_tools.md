
---
title: "掌握 Pandas 与可视化工具"
date: 2025-02-19
tags:
  - ai
  - ml
  - 机器学习
sitemap:
  exclude: false
  changefreq: hourly
---

## 一、准备工作
确保你的电脑已经安装好 Python 环境，推荐使用 Anaconda 发行版，它预装了许多常用的数据科学包，包括我们即将用到的 Pandas、Matplotlib、Seaborn 等。打开 Jupyter Notebook 或者你习惯的 Python 开发环境，新建一个 Python 文件开始我们的实践之旅。

## 二、Pandas 实战演练

### （一）数据导入
首先，我们从一个简单的 CSV 文件导入数据。假设我们有一份关于学生成绩的 CSV 文件“students_scores.csv”，包含字段“学生姓名”“语文成绩”“数学成绩”“英语成绩”。
```python
import pandas as pd

# 使用 read_csv 函数读取数据，文件路径根据实际情况调整
data = pd.read_csv('students_scores.csv')
# 查看前 5 行数据，初步了解数据情况
data.head()  
```

### （二）数据清洗
1. 检查缺失值：
```python
# 查看每列缺失值的数量
data.isnull().sum()  
```
发现有部分成绩列存在缺失值，我们决定用该科目的均值来填充。
```python
# 用语文成绩均值填充语文成绩缺失值
data['语文成绩'].fillna(data['语文成绩'].mean(), inplace=True)
# 同理处理数学和英语成绩
data['数学成绩'].fillna(data['数学成绩'].mean(), inplace=True)
data['英语成绩'].fillna(data['英语成绩'].mean(), inplace=True)
```
2. 检查重复行：
```python
# 查找并显示重复行
duplicated_rows = data[data.duplicated()]
duplicated_rows
```
若存在重复行，可直接删除：
```python
# 删除重复行
data.drop_duplicates(inplace=True)
```

### （三）数据选择与过滤
1. 按列选择：
```python
# 选择“语文成绩”和“数学成绩”两列
chinese_and_math = data[['语文成绩', '数学成绩']]
chinese_and_math.head()
```
2. 基于条件筛选：
```python
# 筛选出数学成绩大于 90 分的学生记录
high_math_scores = data[data['数学成绩'] > 90]
high_math_scores
```

### （四）数据转换与聚合
1. 新增一列“总成绩”：
```python
# 使用 apply 函数结合自定义 lambda 函数计算总成绩
data['总成绩'] = data.apply(lambda row: row['语文成绩'] + row['数学成绩'] + row['英语成绩'], axis=1)
data.head()
```
2. 按班级分组求平均成绩：
假设数据中有“班级”这一字段，我们按班级分组并计算各科平均成绩。
```python
# 使用 groupby 函数分组并求均值
class_average_scores = data.groupby('班级').mean()
class_average_scores
```

## 三、可视化实战演练

### （一）Matplotlib 基础绘图
1. 绘制折线图展示某班语文成绩趋势：
```python
import matplotlib.pyplot as plt

# 假设我们只关注一个班级，先筛选数据
class_data = data[data['班级'] == '一班']
# 绘制折线图，x 轴为学生索引，y 轴为语文成绩
plt.plot(class_data.index, class_data['语文成绩'])
plt.xlabel('学生序号')
plt.ylabel('语文成绩')
plt.title('一班语文成绩趋势')
plt.show()
```
2. 绘制柱状图对比各班数学平均成绩：
```python
# 按班级分组求数学平均成绩
class_math_avg = data.groupby('班级')['数学成绩'].mean()
# 绘制柱状图
class_math_avg.plot(kind='bar')
plt.xlabel('班级')
plt.ylabel('数学平均成绩')
plt.title('各班数学平均成绩对比')
plt.show()
```

### （二）Seaborn 进阶可视化
1. 绘制成绩分布直方图：
```python
import seaborn as sns

# 绘制语文成绩分布直方图
sns.distplot(data['语文成绩'])
plt.xlabel('语文成绩')
plt.ylabel('频率')
plt.title('语文成绩分布')
plt.show()
```
2. 用箱线图展示不同班级英语成绩分布差异：
```python
# 绘制箱线图
sns.boxplot(x='班级', y='英语成绩', data=data)
plt.xlabel('班级')
plt.ylabel('英语成绩')
plt.title('不同班级英语成绩分布')
plt.show()
```

### （三）Plotly 交互式可视化
1. 绘制交互式散点图探究语文和数学成绩关系：
```python
import plotly.express as px

# 使用 Plotly Express 绘制散点图
fig = px.scatter(data, x='语文成绩', y='数学成绩', hover_name='学生姓名')
fig.show()
```
在弹出的网页界面中，鼠标悬停在点上可查看学生姓名及对应的成绩，还能缩放、平移图表进行交互探索。

2. 绘制动态折线图（以时间序列成绩数据为例）：
假设我们有每周记录的学生成绩数据，包含“周次”“语文成绩”“数学成绩”等字段。
```python
# 导入相关模块构建动态图
import plotly.graph_objects as go

# 假设数据已按周次排序
fig = go.Figure()
# 添加语文成绩折线轨迹
fig.add_trace(go.Scatter(x=data['周次'], y=data['语文成绩'], mode='lines', name='语文成绩'))
# 添加数学成绩折线轨迹
fig.add_trace(go.Scatter(x=data['周次'], y=data['数学成绩'], mode='lines', name='数学成绩'))
fig.update_layout(title='每周学生成绩动态变化', xaxis_title='周次', yaxis_title='成绩')
fig.show()
```

通过以上一步步的实操练习，从数据导入、清洗到可视化展示，你已经初步掌握了 Pandas 和可视化工具的基本使用方法。不断尝试不同的数据集和分析需求，你将在数据处理与可视化的道路上越走越远，挖掘出数据更多的价值。 