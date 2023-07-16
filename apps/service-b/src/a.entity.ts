import { Directive, Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Directive('@extends')
export class A {
  @Field(() => ID)
  @Directive('@external')
  id: string;
}
