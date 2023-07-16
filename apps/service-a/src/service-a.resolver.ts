import { Args, Query, ResolveReference, Resolver } from '@nestjs/graphql';
import { A } from './a.entity';
import { AService } from './service-a.service';

@Resolver(A)
export class AResolver {
  constructor(private aService: AService) {}

  @Query(() => A)
  getAById(@Args('id', { type: () => String }) id: string): A {
    console.log('Query A by id');
    return this.aService.getById(id);
  }

  @ResolveReference()
  resolveReference(reference: { _typename: string; id: string }) {
    console.log('Resolving reference...');
    return this.aService.getById(reference.id);
  }
}
