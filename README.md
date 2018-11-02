#项目初始化
npm init

#安装基本依赖
yarn add react
yarn add react-dom
yarn add react-script
npm install pre-commit --save-dev
npm install eslint-fix --save-dev
#scripts配置添加
"scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "precommit-msg": "echo '正在执行eslint验证...' && ex",
    "eslint": "eslint ./src",    #eslint配置h
    "eslint-fix": "eslint --fix ./src"    #eslint-fix配置
}, 
#eslint配置添加
"eslintConfig": {
    "extends": "react-app"
},   
#pre-commit配置添加
"pre-commit": [
    "precommit-msg",
    "eslint"
],
#删除node_modules以及package-lock.json
yarn install
#保存时格式化代码以及tab自动补全代码  settings.json
"emmet.triggerExpansionOnTab": true,
"editor.formatOnType": true,
"editor.formatOnPaste": true,
"editor.formatOnSave": true,
