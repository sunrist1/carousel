使用插件，打开ckeditor根目录下的config.js文件，
添加下面两行
	//load the plugin
	config.extraPlugins = 'carousel,div';

	//allow insert div
	CKEDITOR.config.allowedContent = true;