import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CalculatorComponent } from './calculator.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        CalculatorComponent
      ],
    }).compileComponents();
  });

  it('Component title should be Angular Calculator', () => { //6
    const fixture = TestBed.createComponent(CalculatorComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const querySelector = compiled.querySelector('h1');
    expect(querySelector.textContent).toContain('Angular Calculator');
  });

  fit('button multiply should have the class btn-warning and the text x', () => { //6
    const fixture = TestBed.createComponent(CalculatorComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const querySelector = compiled.querySelector('#x_button');
    expect(querySelector.textContent).toContain('x');
    expect(querySelector.classList.contains('btn-warning')).toBe(true);
  });
});
