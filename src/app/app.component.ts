import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-todo-list';

  remove(item:any) {
  this.items.splice(this.items.indexOf(item), 1);
}
  
  addItem(description:string) {
  this.items.unshift({
    description,
    done: false
  });
  }


  async dataAccessMethod() {
    try {
      const response = await axios.get(' https://jsonplaceholder.typicode.com/todos?_limit=10').then(response => response.data)
      response.map((item:any) => {
        this.items.push({
          description: item.title,
          done:item.completed
        })
      })

    }
    catch (error) {
      console.log('error loading data')
    }
    
  }


  ngOnInit() {
  this.dataAccessMethod()
}
  

    items:{description:string, done:boolean}[]=[]
  


}
