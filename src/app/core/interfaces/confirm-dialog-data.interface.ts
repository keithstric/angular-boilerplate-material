/**
 * The parts of a ConfirmDialogComponent
 */
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
