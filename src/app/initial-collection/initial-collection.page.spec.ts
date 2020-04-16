import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InitialCollectionPage } from './initial-collection.page';

describe('InitialCollectionPage', () => {
  let component: InitialCollectionPage;
  let fixture: ComponentFixture<InitialCollectionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitialCollectionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InitialCollectionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
