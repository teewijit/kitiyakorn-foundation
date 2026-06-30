export type ContentKind = "news" | "project"

export interface ContentItem {
  /** route param, e.g. "1" */
  id: string
  kind: ContentKind
  title: string
  date: string
  description: string
  /** absolute image url (original domain) */
  image: string
  /** illustration backdrop color from source API (may be empty) */
  background?: string
}

export type NewsItem = ContentItem & { kind: "news" }
export type ProjectItem = ContentItem & { kind: "project" }
