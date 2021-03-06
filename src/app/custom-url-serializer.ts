import { DefaultUrlSerializer, UrlTree } from '@angular/router';

export class CustomUrlSerializer extends DefaultUrlSerializer {
  parse(url: string): UrlTree {
    url = url.replace(/\%20/g, '');
    return super.parse(url);
  }

  serialize(tree: UrlTree): string {
    return super.serialize(tree).replace(/%20/g, '');;
  }

}
