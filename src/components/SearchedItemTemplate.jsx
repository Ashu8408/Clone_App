const SearchedItemTemplate = ({data}) => {

    function createMarkup(html) {
        return {__html: html};
      }


    return (
    <div className="flex flex-col py-3 max-2-[700px]">
        <div className="group cursor-pointer" onClick={() => window.open(data.link)}>
            
            <div className="text-sm truncate text-[#2022124]">
                {data.formattedUrl}
            </div>

            <div className="group-hover:underline text-xl text-[#1a0dab] pt-2">
                {data.title}
            </div>
            <div className="tet-sm text-[#4d5156] leading-6 pt-1" dangerouslySetInnerHTML={createMarkup(data.htmlSnippet)} />


        </div>
        Searched template</div>)
};

export default SearchedItemTemplate;
