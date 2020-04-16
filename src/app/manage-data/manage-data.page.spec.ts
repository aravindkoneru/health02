import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ManageDataPage } from './manage-data.page';

describe('ManageDataPage', () => {
  let component: ManageDataPage;
  let fixture: ComponentFixture<ManageDataPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageDataPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ManageDataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
