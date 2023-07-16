import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { B } from './b.entity';
import { A } from './a.entity';
import { BService } from './service-b.service';

@Resolver(B)
export class BResolver {
  constructor(private bService: BService) {}

  @Query(() => B)
  getBById(@Args('id', { type: () => String }) id: string): B {
    console.log('Query B by id');
    return this.bService.getById(id);
  }

  @ResolveField(() => A)
  a(@Parent() b: B) {
    console.log('Resolving field B.a');
    return { __typename: 'A', id: b.aId };
  }
}
