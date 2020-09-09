import { Component, OnInit, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss']
})
export class SnackbarComponent implements OnInit {
  config: any;

  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public data: any,
    private snackRef: MatSnackBarRef<SnackbarComponent>
  ) {

  }

  ngOnInit(): void {
    const config = localStorage.getItem('config');
    this.config = JSON.parse(config);
  }

  closeSnackbar() {
    this.snackRef.dismiss();
  }

}
