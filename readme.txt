这是一个简单的ckeditor 轮播插件，代码质量奇差

使用插件，打开ckeditor根目录下的config.js文件，
添加下面两行
	//load the plugin
	config.extraPlugins = 'carousel,div';

	//allow insert div
	CKEDITOR.config.allowedContent = true;