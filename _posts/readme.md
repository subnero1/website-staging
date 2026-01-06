---
title: Adding various html elements in posts
---

## Headings

Use h3 (font-size 2rem) and h4 (font-size 1.6rem) for headings with underline
Use h6 (font-size 1.4rem) for heading without underline
Use h5 in the sidebar heading

## Vertical cards

Add the following class just below the ol ul closing tag
{: .vertical-cards}

## Horizontal cards

Add the following class just below the ol ul closing tag
{: .horizontal-cards.column2}
{: .horizontal-cards.column3}

### Example 

The following is a ordered list and the css class for card is added after the last element. Please note:
1. The strong (**) tag is used for card heading element
2. Add newline before and after each list element
3. The class should be added after the last element without any line spaces.

1. **Continuous Communication** Assets maintained uninterrupted links while transitioning between coverage zones. This mirrors how mobile devices switch between terrestrial towers.

2. **Continuous Tracking and Situational Awareness** Real time positional updates were available whenever assets were covered by multiple base stations, similar to multi-point localization techniques used in terrestrial networks. This allows safer and more coordinated underwater operations.
{: .horizontal-cards.column2}


## Image with a caption in main post

![Block diagram of the custom modem with co-processor]({{site.baseurl}}/images/block.png)
*Block diagram of the custom modem with co-processor.*
{: .post-image-wrap}

## Center image without any caption

![Block diagram of the custom modem with co-processor]({{site.baseurl}}/images/block.png){: .center-image}

## image link in sidebar

<a href="{{site.baseurl}}/brochures/case-study-underwater-cellular-network.pdf" title="Download case study" target="_blank" class="post-image-link" >
  ![Download case study]({{site.baseurl}}/images/case-study-underwater-cellular-network-cover.jpg)
  *Download case study*
</a>

## Blockquotes

> "Oceans cover 70 percent of the planet but remain almost entirely disconnected. Subnero’s mission is to change that by building the Internet of the Oceans. The deployed network delivered seamless mobility and multi asset connectivity through this environment, giving us greater conviction that we are ready to transform how subsea missions will be conducted going forward."
>
> &mdash; *Manu Ignatius*   
> *CEO, Subnero*


## Simple card in sidebar 

**Card Title**
Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis blanditiis ipsa deleniti, soluta hic repellat id dicta impedit atque repellendus eligendi sit, facere reiciendis. Ipsam molestiae ea deleniti quibusdam totam. 
{: .post-info-card}

## List in sidebar

##### Unordered List

- List item one
- Item two
- thrid item