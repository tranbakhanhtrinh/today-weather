const isHasStorage = typeof window !== 'undefined' && window.localStorage

export const useLocalStorage = () => {
  const getItem = (key: string) =>
    isHasStorage && JSON.parse(localStorage.getItem(key) as string)
  const setItem = (key: string, item: any) =>
    isHasStorage && localStorage.setItem(key, JSON.stringify(item))

  return {
    getItem,
    setItem
  }
}
