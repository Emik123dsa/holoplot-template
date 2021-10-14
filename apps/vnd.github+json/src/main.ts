import Vue from 'vue';
import { bootstrap } from '@bootstrap';

bootstrap<Vue>().catch((reason: Error) => console.error(reason));
