import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConnectWearablePage } from './connect-wearable.page';

describe('ConnectWearablePage', () => {
  let component: ConnectWearablePage;
  let fixture: ComponentFixture<ConnectWearablePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectWearablePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConnectWearablePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
