/// <reference no-default-lib="true"/>

import Vue, {
  Component,
  PluginFunction,
  VueConstructor,
  DirectiveOptions,
} from 'vue';

import './lib';

declare module 'vue/types/vue' {
  interface VueConstructor {
    $myGlobal: string;
  }
}

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    myOption?: string;
  }
}
import Vue from 'vue';

declare module 'vue/types/vue' {
  interface VueConstructor {
    $myGlobal: string;
  }
}

declare module 'vue/types/options' {
  interface ComponentOptions<
    V extends Vue,
    Data = DefaultData<V>,
    Methods = DefaultMethods<V>,
    Computed = DefaultComputed,
    PropsDef = PropsDefinition<DefaultProps>,
    Props = DefaultProps
  > {
    myOption?: string;
  }
}
