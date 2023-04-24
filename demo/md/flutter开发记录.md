
Flutter 
Flutter是一种跨平台的移动应用程序开发框架，使用Flutter开发的应用程序可以同时运行在iOS和Android平台上，而且不需要太多的适配。

Flutter自带一套基础UI库，这些组件在iOS和Android上的样式和行为都是一致的。同时，Flutter还提供了一些平台相关的API，使得应用程序可以调用各自平台的特定功能，例如调用原生代码、访问相机等。

虽然Flutter具备跨平台开发的能力，但在实际开发过程中，由于iOS和Android平台之间仍然存在一些差异，因此可能需要进行一些平台适配的工作。比如针对某个特定平台上的不兼容问题，可能需要对该平台进行单独处理，或者根据不同平台的需求，使用不同的组件、库或API。

所需工具
1 flutterSDK 中文官网下载 存放在了~/development目录下
在.zshrc 添加代码 配置路径
export PATH="$PATH:/Users/----/development/flutter/bin"
2 xcode 开发ios macos
3 