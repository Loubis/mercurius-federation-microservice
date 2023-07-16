import { Directive, Field, ID, ObjectType } from '@nestjs/graphql';
import { A } from './a.entity';

@ObjectType()
@Directive('@key(fields: "id")')
export class B {
  constructor(options: { id: string; someAttributeInB: string; aId: string }) {
    this.id = options.id;
    this.someAttributeInB = options.someAttributeInB;
    this.aId = options.aId;
  }

  @Field(() => ID)
  id: string;

  @Field()
  someAttributeInB: string;

  @Field()
  aId: string;

  @Field(() => A)
  a?: A;
}
