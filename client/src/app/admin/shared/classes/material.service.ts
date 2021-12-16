import { ElementRef } from "@angular/core"

declare var M
export interface MaterialInstance{
    open?():void
    close?():void
    destroy?():void
}
export class MaterialService{
    static toast(message:String){
        M.toast({html:message})
    }

    static updateTextInput(){
        M.updateTextFields()
    }

    static initModal(ref:ElementRef):MaterialInstance {
        return M.Modal.init(ref.nativeElement) 
    }

    static initCarousel(ref:ElementRef,set:Object):MaterialInstance {
        return M.Carousel.init(ref.nativeElement,set) 
    }

    static initTabs(ref:ElementRef):MaterialInstance{
        return M.Collapsible.init(ref.nativeElement)
    }

}