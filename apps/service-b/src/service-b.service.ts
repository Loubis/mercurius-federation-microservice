import { Injectable } from '@nestjs/common';
import { B } from './b.entity';

@Injectable()
export class BService {
  private testData = {
    '527ae3ae-234b-4ff0-8fb5-c4c3010cb372': new B({
      id: '527ae3ae-234b-4ff0-8fb5-c4c3010cb372',
      someAttributeInB: 'Hello this is an attribute in B of Item 1',
      aId: 'ce9f87ac-4b3a-4245-857d-74072d4450ab',
    }),
    '44151d26-33e7-46e1-8fbd-7735a2037df5': new B({
      id: '44151d26-33e7-46e1-8fbd-7735a2037df5',
      someAttributeInB: 'Hello this is an attribute in B of Item 2',
      aId: '99178862-c049-46fc-9c94-795796bcf932',
    }),
  };

  getById(id: string): B {
    return this.testData[id];
  }
}
