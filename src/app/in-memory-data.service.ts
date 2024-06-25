import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Profile } from './profile';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const profiles: Profile[] = [
      { id: 1, name: 'John Doe', email: 'john.doe@example.com', phone: '1234567890', address: '123 Main St' }
    ];
    return { profiles };
  }
}
