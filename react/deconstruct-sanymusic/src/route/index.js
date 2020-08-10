import React from "react";
import { Redirect } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import BlankLayout from "../layouts/BlankLayout";


export default [
    {
      component: BlankLayout,
      routes: [
        {
          path: "/",
          component: HomeLayout,
          routes: [
            {
              path: "/",
              exact: true,
              render: () => <Redirect to={"/recommend"} />
            },
            {
              path: "/recommend",
              component: SuspenseComponent(RecommendComponent),
              routes: [
                {
                  path: "/recommend/:id",
                  component: SuspenseComponent(AlbumComponent)
                }
              ]
            },
            {
              path: "/singers",
              component: SuspenseComponent(SingersComponent),
              key: "singers",
              routes: [
                {
                  path: "/singers/:id",
                  component: SuspenseComponent(SingerComponent)
                }
              ]
            },
            {
              path: "/rank/",
              component: SuspenseComponent(RankComponent),
              key: "rank",
              routes: [
                {
                  path: "/rank/:id",
                  component: SuspenseComponent(AlbumComponent)
                }
              ]
            },
            {
              path: "/album/:id",
              exact: true,
              key: "album",
              component: SuspenseComponent(AlbumComponent)
            },
            {
              path: "/search",
              exact: true,
              key: "search",
              component: SuspenseComponent(SearchComponent)
            }
          ]
        }
      ]
    }
  ];