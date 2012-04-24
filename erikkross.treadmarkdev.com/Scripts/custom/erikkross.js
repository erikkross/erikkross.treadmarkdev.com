$(document).ready(function () {

    var $page = $('#page'); //div that holds all of the "page" content
    var $home = $('#home');
    var $work = $('#work');
    var $about = $('#about');
    var $contact = $('#contact');

    // Client-side routes
    Sammy(function () {

        this.get('#/', function () {
            //        self.chosenFolderId(this.params.folder);
            //        self.chosenMailData(null);
            //        $.get("/mail", { folder: this.params.folder }, self.chosenFolderData);
            $page.children().hide();
            $home.show();
        });

        this.get('#work', function () {
            //        self.chosenFolderId(this.params.folder);
            //        self.chosenMailData(null);
            //        $.get("/mail", { folder: this.params.folder }, self.chosenFolderData);
            $page.children().hide();
            $work.show();
        });

        this.get('#about', function () {
            //        self.chosenFolderId(this.params.folder);
            //        self.chosenMailData(null);
            //        $.get("/mail", { folder: this.params.folder }, self.chosenFolderData);
            $page.children().hide();
            $about.show();

        });

        this.get('#contact', function () {
            //        self.chosenFolderId(this.params.folder);
            //        self.chosenMailData(null);
            //        $.get("/mail", { folder: this.params.folder }, self.chosenFolderData);
            $page.children().hide();
            $contact.show();

        });

    }).run('#/');

});
