import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SEOService {

  constructor(private meta: Meta, private titleService: Title) {
  }
  addMetaTags(data) {

    /*  {
          title: '',
          description: '',
          indexing: '',
          author: '',
          date: '',
          contentType: '',
          ogTitle: '',
          ogType: '',
          charset: '',
        } */

    if (data.title) {
      this.titleService.setTitle(data.title);
    }

    if (data.description) {
      this.meta.addTag({ name: 'description', content: data.description });
    }

    if (data.keywords) {
      this.meta.addTag({ name: 'keywords', content: data.keywords });
    }

    this.meta.addTags([
      { name: 'robots', content: 'INDEX, FOLLOW' }
    ], true);

    if (data.indexing == 2) {
      this.meta.addTags([
        { name: 'robots', content: 'NOINDEX, NOFOLLOW' }
      ], true);
    }

    if (data.author) {
      this.meta.addTags([
        { name: 'author', content: data.author }
      ], true);
    }

    this.meta.addTags([
      { httpEquiv: 'Content-Type', content: 'text/html' }
    ], true);

    if (data.contentType) {
      this.meta.addTags([
        { httpEquiv: 'Content-Type', content: data.contentType }
      ], true);
    }

    if (data.ogTitle) {
      this.meta.addTags([
        { property: 'og:title', content: data.ogTitle }
      ], true);
    }
    if (data.ogType) {
      this.meta.addTags([
        { property: 'og:type', content: data.ogType }
      ], true);
    }
    if (data.charset) {
      this.meta.addTags([
        { charset: data.charset }
      ], true);
    } else {
      this.meta.addTags([
        { charset: 'UTF-8' }
      ], true);
    }
  }
  getMetaTags() {
    let els: HTMLMetaElement[] = this.meta.getTags('name');
    return els;
  }


}
