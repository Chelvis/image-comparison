import { Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
    selector: 'app-image-comparison',
    styleUrls: ['./image-comparison.component.sass'],
    templateUrl: './image-comparison.component.html'
})
export class ComparisonComponent implements OnInit {
    private readonly FIRST_INDEX = 0;
    private readonly SECOND_INDEX = 1;

    @ViewChild('comparisonElement', {static: true}) private readonly comparisonElement;
    @Input() private readonly images: string[];
    @Input() private maxHeight: string | number = null;

    public ngOnInit(): void {
        if (this.images.length != 2) {
            console.error(`Image comparison needs an array with two values (images URLs as string) and this is ${this.images.length} values.`);
            return;
        }
        this.initComparison();
    }

    public getFirstImage(): string {
        return this.images[this.FIRST_INDEX];
    }

    public getSecondImage(): string {
        return this.images[this.SECOND_INDEX];
    }

    private initComparison(): void {

        const comparisonElement = this.comparisonElement.nativeElement;

        const fixedImageElement = comparisonElement.querySelector('.fixed-image') as HTMLElement;
        const slideImageElement = comparisonElement.querySelector('.slide-image') as HTMLElement;
        const slider = comparisonElement.querySelector('.comparison__slider') as HTMLElement;

        if (this.maxHeight) {
            this.maxHeight = (typeof(this.maxHeight) === 'number' ? `${this.maxHeight}px` : this.maxHeight);
            [].forEach.call(comparisonElement.querySelectorAll('img'), img => img.style.maxHeight = this.maxHeight);
        }

        let held = false;

        const getCursorPos = event => {
            const e = event || window.event;
            const a = fixedImageElement.getBoundingClientRect();
            const x = (e.pageX || e.touches[0].clientX) - a.left;
            return (x - window.pageXOffset) / comparisonElement.clientWidth * 100;
        }

        const slide = x => {
            slideImageElement.style.width = `${x}%`;
            slider.style.left = `${Math.min(Math.max(x, 0), 100)}%`;
        }

        const slideMove = event => {
            if (!held) {
                return false;
            }
            const position = getCursorPos(event);
            slide(position);
        }

        const onHoldSlider = event => {
            event.preventDefault();
            held = true;
            window.addEventListener('mousemove', slideMove);
            window.addEventListener('touchmove', slideMove);
        }

        slider.addEventListener('mousedown', onHoldSlider);
        slider.addEventListener('touchstart', onHoldSlider);

        window.addEventListener('mouseup', () => (held = false));
        window.addEventListener('touchend', () => (held = false));

        slide(50);
    }
}
