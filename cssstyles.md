

### **一、文本与字体格式**

color: red;                  /* 字体颜色 */
font-size: 16px;             /* 字体大小 */
font-family: Arial, sans-serif; /* 字体类型 */
font-weight: bold;           /* 字体粗细 */
font-style: italic;          /* 字体样式 */
text-align: center;          /* 对齐方式 */
text-decoration: underline;  /* 下划线等 */
line-height: 1.5;            /* 行距 */
letter-spacing: 1px;         /* 字母间距 */
word-spacing: 5px;           /* 单词间距 */
text-transform: uppercase;   /* 字母大小写 */
white-space: nowrap;         /* 不换行 */

### **二、盒模型（Box Model）**

width: 200px;                /* 宽度 */
height: 100px;               /* 高度 */
padding: 10px;               /* 内边距 */
margin: 20px;                /* 外边距 */
border: 1px solid #000;      /* 边框 */
box-sizing: border-box;      /* 包括padding和border */

### **三、背景与颜色**

background-color: #f0f0f0;   /* 背景颜色 */
background-image: url("bg.jpg"); /* 背景图 */
background-repeat: no-repeat; /* 不重复 */
background-size: cover;      /* 背景图缩放 */
background-position: center; /* 背景位置 */
opacity: 0.8;                /* 透明度 */

### **四、定位与布局**

position: relative;          /* 定位类型：static, relative, absolute, fixed, sticky */
top: 10px;                   /* 相对位置 */
left: 20px;
z-index: 1;                  /* 堆叠顺序 */
display: block;              /* 显示类型 */
float: left;                 /* 浮动 */
clear: both;                 /* 清除浮动 */

### **五、弹性盒子（Flexbox）**

display: flex;
flex-direction: row;         /* row, column */
justify-content: center;     /* 主轴对齐 */
align-items: center;         /* 交叉轴对齐 */
flex-wrap: wrap;             /* 自动换行 */
flex: 1;                     /* 弹性比例 */

### **六、网格布局（Grid）**

display: grid;
grid-template-columns: 1fr 2fr; /* 列宽 */
grid-template-rows: auto;       /* 行高 */
gap: 10px;                      /* 网格间距 */

### **七、动画与过渡**

transition: all 0.3s ease;      /* 过渡动画 */
animation: fadeIn 1s ease-in;  /* 动画调用 */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

### **八、其他常用样式**

cursor: pointer;               /* 鼠标样式 */
overflow: hidden;              /* 内容溢出 */
visibility: hidden;            /* 可见性 */
box-shadow: 2px 2px 5px gray;  /* 阴影 */
border-radius: 8px;            /* 圆角 */
pointer-events: none;          /* 禁用点击 */
