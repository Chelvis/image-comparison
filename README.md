# Angular 2+ Responsive Image Comparison Slider

Just a beauty and responsive plug and play image comparator module for Angular 2+.

You can use it to compare two different images, like **before** and **after** models.

## Installing

Just download or clone this repository and save the `src/app/modules/image-comparison` folder into your angular project (in your **modules** folder, if you're following [Angular Folder Structure](https://medium.com/@motcowley/angular-folder-structure-d1809be95542 "Angular Folder Structure") patterns).

Import the Comparison Module into the module that declares the component where the Image Comparison will be applied.

	import { myComponent } from './my.component'
	import { ComparisonModule } from './modules/image-comparison/image-comparison.module'
	 
	@NgModule({
	 	declarations: [myComponent]
		imports: [ComparisonModule]
	})

Now, in your component, define a property with the URLs of the images to be compared into a list. It must have two values, obviously. See:

	 public images: string[] = [
		 '/assets/image/image1.jpg',
		 '/assets/image/image2.jpg',
	 ]

Note: The images must to have **exactly the same dimensions** (width and height) to works fine, dude.

Then insert the `as-image-comparison` element in the HTML of your component, just like this:

	 <app-image-comparison *ngIf='images' [images]='images'></app-image-comparison>

Note: Is important to put the condition `*ngIf='images'` to avoid errors if the images have undefined values.

## Options

| Option  |  Type  |  Description  |
| ------------------- | ------------------- | ------------------- |
|  images |  string[] |  Array containing two items, each one as the URL of an image. |
|  maxHeight (optional) |  number \| string |  Defines a max height for the comparator stage. If number, it\'s calculated in pixels. If string, you can use `px` or `vh` unities.  |

## Demo

After all, this must works like this:

[![](https://i.ibb.co/Ctx8n2v/comparison.png)](https://i.ibb.co/Ctx8n2v/comparison.png)

See the **live demo** on https://chelvis.github.io/image-comparison/.
