# confirm-dialog-component

This is a basic confirm dialog component

## Usage

```javascript
constructor(
    public dialog: MatDialog
) {}

openDialog() {
  const dialogRef = this.dialog.open(ConfirmDialogComponent, {data: {title: 'foo', message: 'foo bar?': noCancelButton: false}});
  dialogRef.afterClosed().subscribe(result => {
    console.log('Dialog closed', result);
  });
}
```
