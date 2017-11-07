### 引用模块
```javascript
@NgModule({
   declarations: [
   ],
   imports: [
     BrowserModule,
     AuiIconModule.forRoot([
       {
         family: 'desk',
         map: [
           {name: 'dir', code: '\ue628'},
           {name: 'config', code: '\ue603'},
           {name: 'power', code: '\ue64d'},
           {name: 'copy', code: '\ue8e0'}
         ]
       }
     ])
   ],
   providers: [],
   bootstrap: [AppComponent]
 })
 export class AppModule { }
 ```
