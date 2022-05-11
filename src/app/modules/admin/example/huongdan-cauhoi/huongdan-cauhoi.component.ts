import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { huongdanCauhoiService } from './huongdan-cauhoi.service';
import * as customBuild from '../../../ckCustomBuild/build/ckEditor';

@Component({
  selector: 'app-huongdan-cauhoi',
  templateUrl: './huongdan-cauhoi.component.html',
  styleUrls: ['./huongdan-cauhoi.component.scss']
})
export class HuongdanCauhoiComponent implements OnInit {

  huongdan:any;
  message:'chon theme'
  userProfile: FormGroup;
  idHuongdan;
  public Editor = customBuild;
  public config = {
    htmlSupport: {
      allow: [
        {
            name: /.*/,
            attributes: true,
            classes: true
        }
    ], 
  }
  }
  
  
  constructor(private huongdanService: huongdanCauhoiService, private fb: FormBuilder) { }

  onSubmit() {
    this.huongdanService.postHuongdan(this.userProfile.value).subscribe()
    alert('Tạo nội dung thành công') 
  }

  updateHuongdan(){
    alert('Cập nhật thành công')
    
    this.huongdanService.updateHuongdan(this.userProfile.value).subscribe()
  }
  deleteHuongdan(){
    alert('Xóa thêm thành công')
    
    this.huongdanService.deleteHuongdan(this.idHuongdan).subscribe()
  }

  onSelect(item){    
    this.userProfile.get('content').setValue(item.content);
    this.userProfile.get('title').setValue(item.title);
    this.userProfile.addControl('id', new FormControl(item.id));
    this.userProfile.get('id').setValue(item.id);
    this.idHuongdan = item.id
  }
  // onSelectId(id){
    
  //   this.userProfile.get('parentid').setValue(id);   
  // }   



  ngOnInit(): void {

    

    this.userProfile = this.fb.group({
      title: [''],
      // des:[''],
      content:[''],
      // parentid:[''],
      // slug: [''],
      
    });
    this.huongdanService.getHuongdan()
    
    this.huongdanService.huongdans$.subscribe((huongdan)=>{
      this.huongdan = huongdan
      
    })
    // this.huongdanService.getMenu().subscribe();
    // this.huongdanService.menu$.subscribe((menu)=>{
    //   this.menu = menu.filter(e => e.parentid =='')
    //   console.log(this.menu);
      
    // })

    
  }
}
