import Route from '@ember/routing/route';

export default class ProgrammersRoute extends Route {
  model() {
    return ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];
  }
}
