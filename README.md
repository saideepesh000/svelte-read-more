
# Svelte Read More

A small & simple svelte component to render text dynamically using `read more` or `show more` & `read less` or `show less` (similar) labels

## Installation

`npm i svelte-read-more`

## Usage 

### Basic

```svelte
<script>
import ReadMore from 'svelte-read-more';

// declaring a content variable
const content = 'Lorem ipsum dolor sit amet, consectetur adippscing elit. Duis eu neque lacus. Mauris
scelerisque sed arcu vel pharetra. Aenean nec nulla sed nulla viverra cursus at et lacus.
Etiam accumsan turpis ac consequat sodales. In sollicitudin egestas arcu, et vulputate nunc
semper in. Praesent interdum odio ac tempor feugiat. Integer id sapien a enim iaculis
fringilla sed ac lacus. Vivamus odio enim, faucibus vitae nibh malesuada, semper dapibus
massa. Fusce ligula lorem, dictum sit amet elit sit amet, tempor feugiat nulla. Vestibulum
non luctus dolor. Vestibulum consectetur ipsum nec sem eleifend ultricies. Lorem ipsum dolor.' 

</script>

<ReadMore textContent={content} maxChars={10}/>
```

### Demo

https://user-images.githubusercontent.com/43727167/140058225-27060021-b169-498d-b630-35445894f382.mp4


### Provide Max Words Option

```svelte
<script>
import ReadMore from 'svelte-read-more';

// declaring a content variable
const content = 'Lorem ipsum dolor sit amet, consectetur adippscing elit. Duis eu neque lacus. Mauris
scelerisque sed arcu vel pharetra. Aenean nec nulla sed nulla viverra cursus at et lacus.
Etiam accumsan turpis ac consequat sodales. In sollicitudin egestas arcu, et vulputate nunc
semper in. Praesent interdum odio ac tempor feugiat. Integer id sapien a enim iaculis
fringilla sed ac lacus. Vivamus odio enim, faucibus vitae nibh malesuada, semper dapibus
massa. Fusce ligula lorem, dictum sit amet elit sit amet, tempor feugiat nulla. Vestibulum
non luctus dolor. Vestibulum consectetur ipsum nec sem eleifend ultricies. Lorem ipsum dolor.' 

</script>

<ReadMore textContent={content} maxWords={10}/>
```

### Demo

https://user-images.githubusercontent.com/43727167/140058495-e05b5dfc-fc03-4d93-8200-2107a25a2393.mp4


### Override Labels

```svelte
<script>
import ReadMore from 'svelte-read-more';

// declaring a content variable
const content = 'Lorem ipsum dolor sit amet, consectetur adippscing elit. Duis eu neque lacus. Mauris
scelerisque sed arcu vel pharetra. Aenean nec nulla sed nulla viverra cursus at et lacus.
Etiam accumsan turpis ac consequat sodales. In sollicitudin egestas arcu, et vulputate nunc
semper in. Praesent interdum odio ac tempor feugiat. Integer id sapien a enim iaculis
fringilla sed ac lacus. Vivamus odio enim, faucibus vitae nibh malesuada, semper dapibus
massa. Fusce ligula lorem, dictum sit amet elit sit amet, tempor feugiat nulla. Vestibulum
non luctus dolor. Vestibulum consectetur ipsum nec sem eleifend ultricies. Lorem ipsum dolor.' 

</script>

<ReadMore textContent={content} maxChars={10} readMoreLabel='Show more' readLessLabel='Show less'/>
```

### Demo

https://user-images.githubusercontent.com/43727167/140058820-519d8a14-be97-4aa7-b30b-1314320f2aa0.mp4


### Override dot-dot-dot

```svelte
<script>
import ReadMore from 'svelte-read-more';

// declaring a content variable
const content = 'Lorem ipsum dolor sit amet, consectetur adippscing elit. Duis eu neque lacus. Mauris
scelerisque sed arcu vel pharetra. Aenean nec nulla sed nulla viverra cursus at et lacus.
Etiam accumsan turpis ac consequat sodales. In sollicitudin egestas arcu, et vulputate nunc
semper in. Praesent interdum odio ac tempor feugiat. Integer id sapien a enim iaculis
fringilla sed ac lacus. Vivamus odio enim, faucibus vitae nibh malesuada, semper dapibus
massa. Fusce ligula lorem, dictum sit amet elit sit amet, tempor feugiat nulla. Vestibulum
non luctus dolor. Vestibulum consectetur ipsum nec sem eleifend ultricies. Lorem ipsum dolor.' 

</script>

<ReadMore textContent={content} maxChars={10} dotDotDot='---'/>
```
### Demo

https://user-images.githubusercontent.com/43727167/140059021-93df210d-7ff0-408a-aa45-0ba77c2a19f8.mp4


### Options

| Name | Description | Type | Default value
| -------------- |  ---------------- |  ---------------- |  ---------------- |
| textContent | The text that we want to show dynamically | string | null
| maxChars | The maximum number of characters that we want to show  | number | null
| maxWords | The maximum number of words that we want to show | number | null
| readMoreLabel | The label for `read more` button | string | `Read more`
| readLessLabel | The label for `read less` button | string | `Read less`
| dotDotDot | The ellipsis | string | `...`
| maxLines | 🚧 | 🚧 | 🚧
| buttonClassName | 🚧 | 🚧 | 🚧

#### Note: Either maxChars or maxWords should be passed 
