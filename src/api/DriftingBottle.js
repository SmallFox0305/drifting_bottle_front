import { alova } from '@/utils/request'

export const pick = async () => await alova.Get('/pick')

export const drop = async (data) => await alova.Post('/drop', data)
