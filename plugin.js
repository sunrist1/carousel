
CKEDITOR.plugins.add('carousel',{
	icons:'carousel',
	init:function(editor){
		//register the carousel command.
		editor.addCommand( 'carousel', new CKEDITOR.dialogCommand( 'carouselDialog' ) );
		CKEDITOR.dialog.add( 'carouselDialog', this.path +'dialogs/dialog_carousel.js' );

		//define a button that will be associated with the dialog window
		editor.ui.addButton( 'carousel', {
		    label: 'Insert carouseleviation',
		    command: 'carousel',
		    toolbar: 'insert'
		});

	},

})




