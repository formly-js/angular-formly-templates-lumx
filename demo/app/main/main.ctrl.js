class FormCtrl {
  constructor(formFields, contents, formData, LxDialogService) {
  //constructor(LxDialogService) {
    this.contents = contents;
    this.formData = formData || {};
    this.formFields = formFields();
    this.jsonFields = formFields();
    this.currentItem = 0;
    this.LxDialogService = LxDialogService;
  }

  submit() {
    alert(JSON.stringify(this.formData));
  }

  openDialog() {
    this.LxDialogService.open('docsModal');
  }
}

//FormCtrl.$inject = ['LxDialogService'];
FormCtrl.$inject = ['formFields', 'contents', 'formData', 'LxDialogService'];

export default FormCtrl;
