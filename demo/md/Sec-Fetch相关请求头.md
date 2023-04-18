https://juejin.cn/post/7126466611166806052

Sec-Fetch相关请求头
Sec-Fetch是一种元数据请求头（Fetch Metadata Request Headers），它于2019年发布于新的草案中，服务端可以通过它来精确判断请求的合法性，杜绝非法请求和攻击，提高web服务的安全性。



Sec-Fetch-Dest
它是一个请求头，指示服务器的请求目的地。它是一个结构化的标头，其值是一个带有可能值的标记audio, audioworklet, document, embed, empty, font, image, manifest, object, paintworklet, report, script, serviceworker, sharedworker, style, track, video, worker, xslt, and nested-document.
PS:即说明客户端请求的目的，想要什么样的资源。

Sec-Fetch-Site
Sec-Fetch-Site包含了一个用于指示资源所请求的上下文环境的值
"none": 表示没有引荐站点。例如，请求来自用户的书签或浏览器地址栏。
"same-origin": 表示请求来自与当前文档有相同来源的文档。
"same-site": 表示请求来自相同的站点，但该站点与当前站点不同。
"cross-site": 表示请求来自不同的站点。
这些值可以帮助Web服务器确定资源请求的上下文环境，并采取相应的安全和隐私措施。例如，如果请求来自跨站点，则服务器可能需要进行更严格的身份验证和授权检查，以防止恶意攻击。

Sec-Fetch-User的值通常为?0或?1，表示请求是由用户操作发起的还是自动发起的。?1表示请求是由用户操作发起的，例如用户单击了链接或提交了表单；?0表示请求是由浏览器自动发起的，例如图片、CSS或脚本等资源的请求。

Sec-Fetch-Mode是一个HTTP请求头，用于指示请求的跨域方式。
具体来说，Sec-Fetch-Mode可以包含以下几个值之一：
navigate：表示请求是导航请求，例如用户在地址栏中输入URL或通过单击链接导航到页面；
same-origin：表示请求的目标与当前页面具有相同的源（协议、域名和端口），例如在同一网站内进行资源请求；
cors：表示请求需要进行跨域资源共享（CORS）；
nested-navigate：表示请求是一个嵌套的导航请求，例如在一个iframe或frame中打开页面；
no-cors：表示请求不需要遵循CORS规则，通常用于发送跨域请求时，服务器只返回一个简单的响应头。
Sec-Fetch-Mode可以帮助服务器更好地了解请求的跨域方式，从而更好地进行资源的响应。例如，在进行跨域请求时，服务器可能需要设置一些CORS相关的响应头，而当请求为同源请求时，则不需要设置这些响应头。