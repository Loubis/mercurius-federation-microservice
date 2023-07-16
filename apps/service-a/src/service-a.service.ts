import { Injectable } from '@nestjs/common';
import { A } from './a.entity';

@Injectable()
export class AService {
  private testData = {
    'ce9f87ac-4b3a-4245-857d-74072d4450ab': new A({
      id: 'ce9f87ac-4b3a-4245-857d-74072d4450ab',
      someAttributeInA: 'Hello this is an attribute in A of Item 1',
      anotherAttributeInA: 'Hello this is another attribute in A of Item 1',
    }),
    '99178862-c049-46fc-9c94-795796bcf932': new A({
      id: '99178862-c049-46fc-9c94-795796bcf932',
      someAttributeInA: 'Hello this is an attribute in A of Item 2',
      anotherAttributeInA: 'Hello this is another attribute in A of Item 2',
    }),
  };

  getById(id: string): A {
    return this.testData[id];
  }
}
