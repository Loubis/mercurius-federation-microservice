import { Directive, Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Directive('@key(fields: "id")')
export class A {
  constructor(options: {
    id: string;
    someAttributeInA: string;
    anotherAttributeInA: string;
  }) {
    this.id = options.id;
    this.someAttributeInA = options.someAttributeInA;
    this.anotherAttributeInA = options.anotherAttributeInA;
  }

  @Field(() => ID)
  id: string;

  @Field()
  someAttributeInA: string;

  @Field()
  anotherAttributeInA: string;
}
