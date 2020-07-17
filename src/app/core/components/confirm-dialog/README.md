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

### Using from the UI Service

```javascript
constructor(
  private _ui: UiService
) {}

openDialog() {
  const dialogRef = this._ui.notifyUserShowConfirmDialog({
    message: 'foo bar?',
    title: 'foo',
    noCancelButton: false
  });
  dialogRef.afterClosed().subscribe(result => {
    console.log('Dialog closed', result);
  });
}
```

## ConfirmDialogData Interface

```typescript
export interface ConfirmDialogData {
	/**
	 * The title of the dialog
	 */
	title?: string;
	/**
	 * The message displayed in the dialog
	 */
	message?: string;
	/**
	 * Include an HTML string to display as the message
	 */
	messageHtml?: string;
	/**
	 * Set to `true` to hide the cancel button
	 */
	noCancelButton?: boolean;
	/**
	 * The text for the cancel button
	 */
	cancelButtonText?: string;
	/**
	 * The text for the confirm button
	 */
	confirmButtonText?: string;
}
```
