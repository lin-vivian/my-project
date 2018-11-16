import React, { Component } from "react";
import './App.css'
class App extends Component {
    render() {
        return <div id="jing-page-container">
            <header id="header">我是头部</header>
            <div id="page-content">
                <div className="sidebar-left">
                    我是做侧边栏
                </div>
                <div className="main-content"></div>
                <div className="sidebar-right"></div>
            </div>
            <footer id="footer">
                <div>我是页脚</div>
            </footer>
        </div>
    }
}

export default App