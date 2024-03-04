import { Route } from '@angular/router';
import { BrowseByGuard } from './browse-by-guard';
import { BrowseByDSOBreadcrumbResolver } from './browse-by-dso-breadcrumb.resolver';
import { BrowseByI18nBreadcrumbResolver } from './browse-by-i18n-breadcrumb.resolver';
import { DSOEditMenuResolver } from '../shared/dso-page/dso-edit-menu.resolver';
import { BrowseByPageComponent } from './browse-by-page/browse-by-page.component';

export const ROUTES: Route[] = [
  {
    path: '',
    resolve: {
      breadcrumb: BrowseByDSOBreadcrumbResolver,
      menu: DSOEditMenuResolver
    },
    providers: [
      BrowseByI18nBreadcrumbResolver,
      BrowseByDSOBreadcrumbResolver
    ],
    children: [
      {
        path: ':id',
        component: BrowseByPageComponent,
        canActivate: [BrowseByGuard],
        resolve: { breadcrumb: BrowseByI18nBreadcrumbResolver },
        data: { title: 'browse.title.page', breadcrumbKey: 'browse.metadata' }
      }
    ]
  }];
