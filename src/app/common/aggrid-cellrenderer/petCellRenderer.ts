import {Component} from "@angular/core";

import {AgRendererComponent} from "ag-grid-angular";

@Component({
    selector: 'pets-cell',
    template: `{{valueCubed()}}`
})

export class PetCellRenderer implements AgRendererComponent{
    private params: any;
    private cubed: any;

    // called on init
    agInit(params: any): void {
        this.params = params;
        this.cubed = this.params.data.value ;
        console.log(this.cubed);
    }

    // called when the cell is refreshed
    refresh(params: any): boolean {
        this.params = params;
        this.cubed = this.params.data.value ;
        
        return true;
    }

    public valueCubed(): number {
        return this.cubed;
    }
}
