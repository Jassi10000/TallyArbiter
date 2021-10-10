import { RegisterTallyInput } from "../_decorators/RegisterTallyInput.decorator";
import { Source } from '../_models/Source';
import { TallyInput } from './_Source';

@RegisterTallyInput("cf51e3c9", "Incoming Webhook", "", [{ fieldName: 'path', fieldLabel: 'Webhook path', fieldType: 'text' }])
export class IncomingWebhookSource extends TallyInput {
    private client: any;
    constructor(source: Source) {
        super(source);
        this.connected.next(true);
    }


    public exit(): void {
        super.exit();
    }
}
