import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogConfig, MatDialogRef} from '@angular/material/dialog';
import {ConfirmDialogData} from '../../interfaces/confirm-dialog-data.interface';

@Component({
	templateUrl: './confirm-dialog.component.html',
	styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent implements OnInit {

	constructor(
		public dialogRef: MatDialogRef<ConfirmDialogComponent>,
		@Inject(MAT_DIALOG_DATA) public data: ConfirmDialogData
	) {
	}

	ngOnInit(): void {
	}

	/**
	 * just close the dialog and return false
	 * @returns {boolean}
	 */
	onCancel() {
		this.dialogRef.close(false);
	}

	/**
	 * Close the dialog and return true
	 * @returns {boolean}
	 */
	onConfirm() {
		this.dialogRef.close(true);
	}

}
