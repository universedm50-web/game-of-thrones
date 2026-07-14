/* ==========================================================================
   CHRONICLES OF WESTEROS - INTERACTIVE JAVASCRIPT
   ========================================================================== */

// 1. EXPANDED CHARACTER DATABASE WITH ALL PORTRAITS FILLED (FANDOM WIKIA LINKS)
const characters = [
    // --- HOUSE STARK ---
    {
        id: "jon_snow",
        name: "Jon Snow",
        house: "Stark",
        role: "Vua Phương Bắc & Người thừa kế hợp pháp của Ngai Sắt",
        image: "assets/images/char_jon.jpg",
        sigil: "assets/images/sigil_stark.jpg",
        status: "Còn sống",
        weapon: "Kiếm cổ Longclaw (Thép Valyria)",
        motto: "Winter is Coming",
        quote: "Ta không muốn quyền lực. Ta chỉ muốn chiến đấu vì sự sống của tất cả chúng ta.",
        bio: "Jon Snow bắt đầu cuộc hành trình như một đứa con hoang bị ghẻ lạnh của Ned Stark. Anh gia nhập Đội Tuần Đêm, vươn lên làm Chỉ huy trưởng, và cuối cùng được tôn làm Vua Phương Bắc. Sự thật tiết lộ anh chính là Aegon Targaryen - con trai hợp pháp của Rhaegar Targaryen và Lyanna Stark.",
        milestones: [
            { title: "Bức Tường Thành & Đội Tuần Đêm (Phần 1-3)", desc: "Rời Winterfell gia nhập Night's Watch, thâm nhập và học cách thấu hiểu dân man tộc ngoài Vạn Lý Trường Thành." },
            { title: "Trận chiến Castle Black (Phần 4)", desc: "Lãnh đạo quân thủ thành đẩy lùi cuộc tấn công khổng lồ từ mười vạn quân Man Tộc." },
            { title: "Trận Chiến Của Những Đứa Con Hoang (Phần 6)", desc: "Bị phản đồ ám sát, hồi sinh kỳ diệu nhờ Melisandre và cùng Sansa Stark lãnh đạo liên quân giành lại Winterfell từ Ramsay Bolton." },
            { title: "Đại chiến Winterfell & Kết cục (Phần 8)", desc: "Liên minh với Daenerys Targaryen tiêu diệt Dạ Vương. Buộc phải đâm chết Daenerys khi bà phát điên để bảo vệ vương quốc, chấp nhận lưu đày về phương Bắc." }
        ]
    },
    {
        id: "ned_stark",
        name: "Eddard (Ned) Stark",
        house: "Stark",
        role: "Cựu Lãnh chúa Winterfell & Hộ thần Phương Bắc",
        image: "assets/images/char_ned.jpg",
        sigil: "assets/images/sigil_stark.jpg",
        status: "Đã mất",
        weapon: "Trọng kiếm Ice (Thép Valyria)",
        motto: "Winter is Coming",
        quote: "Kẻ ra phán quyết phải là người trực tiếp vung gươm.",
        bio: "Ned Stark là biểu tượng tối cao của danh dự và sự trung thực tại Westeros. Ông đồng ý nhậm chức Tể Tướng để phò tá người bạn thân - Vua Robert Baratheon, nhưng chính tính cách ngay thẳng đã khiến ông rơi vào bẫy của nhà Lannister.",
        milestones: [
            { title: "Cuộc nổi loạn của Robert (Tiền truyện)", desc: "Dấy binh phản vương triều Vua Điên sau khi cha và anh trai bị giết, trực tiếp chấm dứt triều đại Targaryen." },
            { title: "Nhậm chức Bàn Tay Của Vua (Phần 1)", desc: "Đến Vương Đô để điều tra cái chết của Jon Arryn, vô tình khám phá ra bí mật loạn luân về các con của Hoàng hậu Cersei." },
            { title: "Cái chết chấn động (Phần 1)", desc: "Bị bắt giam vì tội phản quốc sau khi Robert qua đời. Bị vua trẻ Joffrey ra lệnh chém đầu bất ngờ, khơi mào Đại chiến Năm Vua." }
        ]
    },
    {
        id: "sansa_stark",
        name: "Sansa Stark",
        house: "Stark",
        role: "Nữ hoàng Phương Bắc & Lãnh chúa Winterfell",
        image: "assets/images/char_sansa.jpg",
        sigil: "assets/images/sigil_stark.jpg",
        status: "Còn sống",
        weapon: "Trí óc chính trị sắc sảo",
        motto: "Winter is Coming",
        quote: "Khi tuyết rơi và gió lạnh thổi qua, con sói đơn độc sẽ chết, nhưng cả đàn sẽ sống sót.",
        bio: "Từ một cô bé tiểu thư ngây thơ mơ mộng về các hiệp sĩ và vương tử, Sansa đã trải qua những bi kịch đẫm máu nhất của gia đình Stark để rèn luyện bản thân thành một nữ chính trị gia kiệt xuất và bản lĩnh.",
        milestones: [
            { title: "Con tin tại Vương Đô (Phần 1-4)", desc: "Bị giam cầm và hành hạ tinh thần bởi Joffrey và Cersei Lannister sau khi cha bị hành quyết." },
            { title: "Bi kịch hôn nhân tại Winterfell (Phần 5)", desc: "Bị Littlefinger gả cho Ramsay Bolton tàn bạo, tự chịu đựng đau khổ trước khi thuyết phục Theon Greyjoy giúp mình trốn thoát." },
            { title: "Giành lại quê hương (Phần 6)", desc: "Đứng sau hỗ trợ Jon Snow giành chiến thắng trong trận chiến nhờ gọi quân xứ Vale cứu nguy kịp thời." },
            { title: "Nữ hoàng Phương Bắc độc lập (Phần 8)", desc: "Từ chối thần phục Ngai Sắt của Bran Stark, đòi độc lập cho Phương Bắc và lên ngôi Nữ hoàng thống trị từ Winterfell." }
        ]
    },
    {
        id: "arya_stark",
        name: "Arya Stark",
        house: "Stark",
        role: "Sát thủ Vô Diện của Đền Hắc Bạch",
        image: "assets/images/char_arya.jpg",
        sigil: "assets/images/sigil_stark.jpg",
        status: "Còn sống",
        weapon: "Kiếm nhỏ Needle & Dao găm thép Valyria",
        motto: "Winter is Coming",
        quote: "Chỉ có một vị thần duy nhất, đó là Cái Chết. Và chúng ta nói với Ngài: 'Không phải hôm nay'.",
        bio: "Con gái thứ hai của nhà Stark. Arya chối bỏ cuộc sống tiểu thư khuê các, chọn con đường rèn luyện kiếm thuật. Trải qua hành trình lưu lạc khắp ngõ ngách Westeros và Essos, cô trở thành sát thủ nguy hiểm nhất thế giới.",
        milestones: [
            { title: "Chứng kiến bi kịch gia đình (Phần 1-2)", desc: "Thoát chết nhờ giả trai trốn chạy khỏi King's Landing sau cái chết của cha, tự lập danh sách những kẻ cần báo thù." },
            { title: "Huấn luyện tại Braavos (Phần 5-6)", desc: "Tầm sư tại Đền Thờ Hắc Bạch của Hội Vô Diện, học cách từ bỏ danh tính và làm chủ các kỹ năng ám sát." },
            { title: "Tiêu diệt Dạ Vương cứu thế giới (Phần 8)", desc: "Trở lại Winterfell sát cánh cùng gia đình. Trực tiếp đâm chết Dạ Vương trong Đêm Trường đại chiến, giải cứu nhân loại khỏi diệt vong." }
        ]
    },
    {
        id: "robb_stark",
        name: "Robb Stark",
        house: "Stark",
        role: "Cựu Vua Phương Bắc & Đại chiến binh",
        image: "https://upload.wikimedia.org/wikipedia/en/7/7b/Robb_Stark-Richard_Madden.jpg",
        sigil: "assets/images/sigil_stark.jpg",
        status: "Đã mất",
        weapon: "Gươm thép Phương Bắc",
        motto: "Winter is Coming",
        quote: "Chúng ta sẽ tiến quân về phía Nam, giành lại công lý và giải cứu người thân.",
        bio: "Con trai trưởng của Ned Stark. Khi cha bị giam cầm, Robb tập hợp toàn bộ chư hầu Phương Bắc kéo quân về phía Nam và được tôn phong làm Vua Phương Bắc sau hàng loạt chiến tích lừng lẫy ngoài mặt trận.",
        milestones: [
            { title: "Tuyên vương Phương Bắc (Phần 1)", desc: "Chiêu binh khởi nghĩa, chiến đấu giành chiến thắng trước quân Lannister để đòi lại công lý cho Ned Stark." },
            { title: "Chiến dịch Whispering Wood (Phần 2)", desc: "Dàn binh mưu trí bắt sống Jaime Lannister, uy hiếp trực tiếp đến thế lực của Tywin Lannister." },
            { title: "Bi thảm Tiệc Cưới Đỏ (Phần 3)", desc: "Phá vỡ giao ước kết hôn với nhà Frey. Bị nhà Frey và Bolton âm mưu phản bội sát hại dã man ngay tại tiệc cưới, chấm dứt triều đại Vua trẻ." }
        ]
    },
    {
        id: "bran_stark",
        name: "Brandon (Bran) Stark",
        house: "Stark",
        role: "Quạ Ba Mắt & Vua của Sáu Vương Quốc",
        image: "https://upload.wikimedia.org/wikipedia/en/3/30/Bran_Stark_Season_6.jpg",
        sigil: "assets/images/sigil_stark.jpg",
        status: "Còn sống (Bất tử tinh thần)",
        weapon: "Ký ức lịch sử & Quyền năng tiên tri",
        motto: "Winter is Coming",
        quote: "Tại sao ngươi nghĩ ta đã đi cả một chặng đường dài đến đây?",
        bio: "Bran bị phế liệt hai chân từ nhỏ do bị Jaime Lannister đẩy ngã. Tuy nhiên, anh sở hữu năng lực tâm linh vượt trội giúp anh đi sâu vào quá khứ, tương lai và trở thành Quạ Ba Mắt kế nhiệm giữ trọng trách lịch sử.",
        milestones: [
            { title: "Tai nạn định mệnh tại Winterfell (Phần 1)", desc: "Vô tình nhìn thấy Cersei và Jaime loạn luân, bị Jaime đẩy xuống từ tháp cao dẫn đến liệt chân vĩnh viễn." },
            { title: "Hành trình tìm Quạ Ba Mắt (Phần 3-4)", desc: "Trốn khỏi Winterfell sau khi thành bị Theon chiếm, đi bộ xuyên Vạn Lý Trường Thành để học phép thuật cổ xưa." },
            { title: "Kế vị Quạ Ba Mắt & Đăng cơ (Phần 6-8)", desc: "Tiếp nhận toàn bộ trí thức nhân loại. Trở về Winterfell chỉ điểm điểm yếu Dạ Vương, sau cùng được bầu làm Vua của Sáu Vương Quốc." }
        ]
    },
    {
        id: "catelyn_stark",
        name: "Catelyn Stark",
        house: "Stark",
        role: "Cựu phu nhân Winterfell",
        image: "https://upload.wikimedia.org/wikipedia/en/b/ba/Catelyn_Stark.jpg",
        sigil: "assets/images/sigil_stark.jpg",
        status: "Đã mất",
        weapon: "Lòng mẫu tử & Mưu trí gia đình",
        motto: "Family, Duty, Honor",
        quote: "Hãy mang các con gái của tôi trở lại, hoặc tôi sẽ cắt cổ vợ của con trai ông!",
        bio: "Sinh ra là con gái lớn của nhà Tully vùng Riverlands trước khi làm vợ Ned Stark. Bà là người mẹ tận tụy hết lòng bảo vệ con cái, nhưng những quyết định cảm tính của bà đôi khi dẫn tới những xung đột tai hại.",
        milestones: [
            { title: "Bắt giữ Tyrion Lannister (Phần 1)", desc: "Nghi ngờ nhà Lannister đứng sau vụ ám hại Bran, bà tự ý bắt giam Tyrion tại quán trọ khơi mào căng thẳng hai gia tộc." },
            { title: "Cố vấn chính trị cho Robb (Phần 2-3)", desc: "Giúp Robb Stark đàm phán với Walder Frey qua cầu. Vì quá xót con gái đã tự ý thả Jaime Lannister để trao đổi, làm rạn nứt quân đội." },
            { title: "Thảm kịch Tiệc Cưới Đỏ (Phần 3)", desc: "Chứng kiến con trai Robb bị đâm chết trước mặt, bà tuyệt vọng cắt cổ vợ Walder Frey trước khi bị sát thủ cắt cổ sát hại." }
        ]
    },

    // --- HOUSE LANNISTER ---
    {
        id: "tywin_lannister",
        name: "Tywin Lannister",
        house: "Lannister",
        role: "Cựu Lãnh chúa Casterly Rock & Hộ vệ Phương Tây",
        image: "assets/images/char_tywin.jpg",
        sigil: "assets/images/sigil_lannister.jpg",
        status: "Đã mất",
        weapon: "Mưu lược bá đạo & Tiền bạc vô biên",
        motto: "Hear Me Roar!",
        quote: "Một con sư tử không bao giờ quan tâm đến ý kiến của loài cừu.",
        bio: "Tywin Lannister là người đàn ông quyền lực nhất Westeros trước khi qua đời. Bằng cái đầu lạnh, sự nhẫn tâm và khối tài sản vàng khổng lồ, ông luôn đặt lợi ích gia tộc lên trên tất cả mọi quy chuẩn đạo đức.",
        milestones: [
            { title: "Bình định Loạn Castamere (Tiền truyện)", desc: "Tiêu diệt hoàn toàn gia tộc Reyne nổi loạn, viết nên bản nhạc 'The Rains of Castamere' cảnh cáo cả vương quốc." },
            { title: "Dàn xếp chiến thắng trước Stannis (Phần 2)", desc: "Kịp thời đem liên quân Lannister - Tyrell về tiếp ứng cứu thủ đô trong trận chiến vịnh Blackwater." },
            { title: "Đạo diễn thảm kịch Tiệc Cưới Đỏ (Phần 3)", desc: "Bắt tay ngầm với Frey và Bolton để giết chết Robb Stark trên bàn tiệc cưới mà không mất một binh lính nào." },
            { title: "Cái chết tủi nhục (Phần 4)", desc: "Ép buộc xử tử oan uổng con trai Tyrion. Bị Tyrion vượt ngục dùng nỏ bắn chết ngay trên nhà vệ sinh của lâu đài." }
        ]
    },
    {
        id: "jaime_lannister",
        name: "Jaime Lannister",
        house: "Lannister",
        role: "Chiến binh huyền thoại & Cựu Chỉ huy Thiết Vệ",
        image: "assets/images/char_jaime.jpg",
        sigil: "assets/images/sigil_lannister.jpg",
        status: "Đã mất",
        weapon: "Kiếm vàng hoàng gia (sau dùng tay trái và kiếm Oathkeeper)",
        motto: "Hear Me Roar!",
        quote: "Bất kể ai cũng phải chọn phe, kể cả khi đó là lựa chọn sai lầm.",
        bio: "Được gọi là 'Kẻ Sát Vua' vì đâm chết Vua Điên để cứu thành phố. Jaime ban đầu là một hiệp sĩ ngạo mạn, vô đạo đức nhưng qua hành trình gian khổ, anh dần thức tỉnh danh dự và chính nghĩa đích thực.",
        milestones: [
            { title: "Đâm sau lưng Vua Điên Aerys (Tiền truyện)", desc: "Giết vị vua điên khi ông ta ra lệnh thiêu rụi toàn bộ King's Landing bằng Hoang Hỏa." },
            { title: "Lưu lạc và mất bàn tay kiếm (Phần 3)", desc: "Bị Locke chặt đứt bàn tay phải làm kiếm sĩ, trải qua hành trình sinh tử cùng Brienne xứ Tarth giúp anh thay đổi thế giới quan." },
            { title: "Rời bỏ Cersei vì đại cục (Phần 7)", desc: "Từ chối lệnh của Cersei, một mình phi ngựa lên phía Bắc sát cánh cùng kẻ thù cũ Stark chống lại Bóng Trắng." },
            { title: "Kết cục bi thương (Phần 8)", desc: "Trở lại cứu Cersei khi vương đô bị Daenerys tàn phá, hai chị em chết nghẹn dưới hầm sập của Red Keep." }
        ]
    },
    {
        id: "cersei_lannister",
        name: "Cersei Lannister",
        house: "Lannister",
        role: "Nữ Hoàng nhiếp chính & Kẻ độc tài Ngai Sắt",
        image: "assets/images/char_cersei.jpg",
        sigil: "assets/images/sigil_lannister.jpg",
        status: "Đã mất",
        weapon: "Hoang hỏa (Wildfire) & Âm mưu chính trị",
        motto: "Hear Me Roar!",
        quote: "Khi chơi trò chơi vương quyền, ngươi chỉ có thể thắng hoặc chết.",
        bio: "Vô cùng xảo quyệt và căm thù tất cả mọi người ngoài các con ruột của mình. Cersei sẵn sàng thực hiện những hành vi tàn độc nhất để duy trì quyền lực hoàng gia.",
        milestones: [
            { title: "Mưu sát Đức vua Robert (Phần 1)", desc: "Sắp xếp cho Robert say rượu gặp nạn khi săn lợn rừng, mở đường cho con trai Joffrey lên ngôi." },
            { title: "Walk of Shame (Phần 5)", desc: "Bị giam cầm bởi tôn giáo cực đoan High Sparrow và ép buộc khỏa thân diễu hành sám hối trước dân chúng Vương Đô." },
            { title: "Bão Hoang Hỏa quét sạch kẻ thù (Phần 6)", desc: "Dùng thuốc nổ thiêu rụi toàn bộ Đại điện Baelor, xóa sổ Giáo phái Thất diện thần và gia tộc Tyrell, tự lập làm Nữ hoàng." },
            { title: "Vương triều đổ nát (Phần 8)", desc: "Chết trong nước mắt dưới đống gạch đá đổ nát của cung điện sụp đổ do rồng Drogon thiêu rụi." }
        ]
    },
    {
        id: "tyrion_lannister",
        name: "Tyrion Lannister",
        house: "Lannister",
        role: "Tể Tướng thông thái & Cánh tay của Vua",
        image: "assets/images/char_tyrion.jpg",
        sigil: "assets/images/sigil_lannister.jpg",
        status: "Còn sống",
        weapon: "Trí tuệ vượt trội & Mưu lược",
        motto: "Hear Me Roar!",
        quote: "Đầu óc cần sách vở mài giũa như kiếm cần đá mài.",
        bio: "Bị gia đình coi thường là 'Quỷ Lùn' do dị tật bẩm sinh, Tyrion dùng trí thông minh xuất chúng để tự vệ. Anh là người có tấm lòng nhân ái hiếm hoi của nhà Lannister.",
        milestones: [
            { title: "Anh hùng Trận Hắc Thủy (Phần 2)", desc: "Nhậm chức Quyền tể tướng, bày mưu dùng Hoang Hỏa thiêu rụi hạm đội khổng lồ của Stannis cứu vương đô." },
            { title: "Trận đấu tử chiến & Vượt ngục (Phần 4)", desc: "Bị vu khống giết vua Joffrey. Tự tay bắn chết cha Tywin sau khi biết ông ép anh vào đường chết, trốn thoát sang Essos." },
            { title: "Cánh tay của Nữ hoàng Daenerys (Phần 5-8)", desc: "Làm cố vấn quân sự cho Daenerys, bình định Essos và chuẩn bị viễn chinh Westeros cứu dân chúng." }
        ]
    },
    {
        id: "joffrey_lannister",
        name: "Joffrey Baratheon (Lannister)",
        house: "Lannister",
        role: "Cựu Hoàng đế bạo tàn của Westeros",
        image: "https://upload.wikimedia.org/wikipedia/en/8/8c/Joffrey_Baratheon.jpg",
        sigil: "assets/images/sigil_lannister.jpg",
        status: "Đã mất",
        weapon: "Quyền lực hoàng gia",
        motto: "Hear Me Roar!",
        quote: "Ta là vua! Ta có quyền làm bất cứ điều gì ta muốn!",
        bio: "Hợp pháp là con trai trưởng của Robert Baratheon nhưng thực chất là con hoang loạn luân giữa Cersei và Jaime Lannister. Joffrey là tên vua trẻ tàn ác, hèn nhát và bất ổn tâm lý nhất lịch sử Bảy Vương Quốc.",
        milestones: [
            { title: "Lên ngôi & Xử tử Ned Stark (Phần 1)", desc: "Trở thành Hoàng đế. Bất chấp lời khuyên bảo, kiên quyết chặt đầu Ned Stark khơi ngòi nội chiến." },
            { title: "Bạo chúa nhút nhát (Phần 2-3)", desc: "Hành hạ Sansa Stark dã man, bỏ chạy khỏi chiến lũy khi Stannis Baratheon nổ súng tấn công cổng thành." },
            { title: "Cái chết tại Đám cưới Tím (Phần 4)", desc: "Bị đầu độc chết thảm hại ngay tại tiệc cưới của chính mình do âm mưu phối hợp giữa Olenna Tyrell và Littlefinger." }
        ]
    },

    // --- HOUSE TARGARYEN ---
    {
        id: "daenerys_targaryen",
        name: "Daenerys Targaryen",
        house: "Targaryen",
        role: "Mẹ Rồng & Kẻ Phá Vỡ Xiềng Xích",
        image: "assets/images/char_daenerys.jpg",
        sigil: "assets/images/sigil_targaryen.jpg",
        status: "Đã mất",
        weapon: "Lửa thiêng của Rồng Drogon",
        motto: "Fire and Blood",
        quote: "Ta không đến để ngăn chiếc bánh xe quay. Ta đến đây để phá vỡ nó.",
        bio: "Từ một công chúa lưu vong bị anh trai bán làm vợ man tộc, Daenerys hồi sinh rồng, xây dựng quân đội giải phóng hàng vạn nô lệ trước khi trở thành vị nữ vương chinh phục đầy tranh cãi.",
        milestones: [
            { title: "Tái sinh từ tro tàn (Phần 1)", desc: "Đi vào ngọn lửa hỏa táng chồng Khal Drogo, hồi sinh ba con rồng thiêng đã tuyệt chủng hàng trăm năm." },
            { title: "Phá vỡ xiềng xích Essos (Phần 3-5)", desc: "Thu phục đội quân Vô Tích (Unsullied), quét sạch bè lũ chủ nô giải phóng hàng vạn dân nghèo tại Astapor và Meereen." },
            { title: "Đại chiến Winterfell chống Bóng Trắng (Phần 8)", desc: "Đem toàn bộ lực lượng lên phía Bắc cứu Westeros trước hiểm họa diệt vong." },
            { title: "Phát điên & Bị ám sát (Phần 8)", desc: "Sau hàng loạt mất mát, cô dùng rồng thiêu rụi King's Landing giết hàng vạn thường dân vô tội, dẫn đến việc bị Jon Snow đâm chết vì đại cục." }
        ]
    },
    {
        id: "viserys_targaryen",
        name: "Viserys Targaryen",
        house: "Targaryen",
        role: "Cựu thái tử lưu vong (Kẻ ăn mày vương quyền)",
        image: "https://upload.wikimedia.org/wikipedia/en/8/8e/Viserys_Targaryen_GOT.jpg",
        sigil: "assets/images/sigil_targaryen.jpg",
        status: "Đã mất",
        weapon: "Lời đe dọa rỗng tuếch",
        motto: "Fire and Blood",
        quote: "Ngươi không muốn đánh thức con rồng trong ta chứ?",
        bio: "Viserys là anh trai của Daenerys. Anh ta ảo tưởng sức mạnh vương quyền, luôn độc đoán hống hách hành hạ em gái và nuôi mộng đòi lại Ngai Sắt bằng mọi giá.",
        milestones: [
            { title: "Gả em gái Daenerys đổi lấy quân đội (Phần 1)", desc: "Bán em gái cho thủ lĩnh Dothraki Khal Drogo để đổi lấy vạn quân vượt biển đánh Westeros." },
            { title: "Vương miện vàng nung nóng (Phần 1)", desc: "Đe dọa dùng kiếm rạch bụng Daenerys khi cô đang mang bầu tại bữa tiệc Dothraki. Bị Khal Drogo đun chảy vàng đai đổ trực tiếp lên đầu trừng phạt." }
        ]
    },
    {
        id: "rhaegar_targaryen",
        name: "Rhaegar Targaryen",
        house: "Targaryen",
        role: "Cựu Thái tử Dragonstone",
        image: "https://upload.wikimedia.org/wikipedia/en/a/a5/Rhaegar_Targaryen_GOT.jpg",
        sigil: "assets/images/sigil_targaryen.jpg",
        status: "Đã mất",
        weapon: "Trọng kiếm hiệp sĩ & Tài nghệ ca hát",
        motto: "Fire and Blood",
        quote: "Đứa trẻ này là hoàng tử được báo trước, và khúc ca của nó là khúc ca của Băng và Lửa.",
        bio: "Con trai cả của Vua Điên Aerys và là cha ruột của Jon Snow. Khác với người cha điên cuồng, Rhaegar là hiệp sĩ hào hoa, tài năng và được nhân dân vô cùng kính trọng trước khi chết trong trận đánh lịch sử.",
        milestones: [
            { title: "Trao hoa hồng xanh cho Lyanna Stark (Tiền truyện)", desc: "Tại giải đấu Harrenhal, anh vượt qua vợ mình trao vương miện cho Lyanna, khơi mào hiểu lầm thế kỷ." },
            { title: "Kết hôn bí mật với Lyanna Stark (Tiền truyện)", desc: "Ly hôn Elia Martell trong bí mật để cưới Lyanna Stark vì tình yêu, hạ sinh Jon Snow cứu thế giới." },
            { title: "Trận chiến sông Trident (Tiền truyện)", desc: "Lãnh đạo quân đội Targaryen chiến đấu trực diện và bị Robert Baratheon dùng búa chiến đập chết trên dòng sông Trident." }
        ]
    },

    // --- HOUSE BARATHEON ---
    {
        id: "robert_baratheon",
        name: "Robert Baratheon",
        house: "Baratheon",
        role: "Cựu Hoàng đế tối cao của Westeros",
        image: "assets/images/char_robert.jpg",
        sigil: "assets/images/sigil_baratheon.jpg",
        status: "Đã mất",
        weapon: "Búa chiến khổng lồ & Bạo lực",
        motto: "Ours is the Fury",
        quote: "Ta đã từng là một chiến binh vĩ đại, giờ đây ta chỉ là một gã béo ngồi trên chiếc ghế sắt lạnh lẽo.",
        bio: "Người dẫn đầu cuộc lật đổ triều đại Targaryen. Robert là chiến binh dũng mãnh vô song trên chiến trường nhưng lại là vị vua yếu kém, chìm đắm trong tửu sắc khi ngồi trên Ngai Sắt.",
        milestones: [
            { title: "Nổi loạn lật đổ Vua Điên (Tiền truyện)", desc: "Khởi binh đòi lại người yêu Lyanna Stark, đánh bại quân Targaryen giải phóng Westeros." },
            { title: "Kết liễu Rhaegar Targaryen (Tiền truyện)", desc: "Đích thân dùng búa chiến đập vỡ lồng ngực thái tử Rhaegar ngay trên dòng sông Trident định đoạt chiến tranh." },
            { title: "Cái chết trong rừng săn lợn (Phần 1)", desc: "Bị lợn rừng đâm chết sau khi bị Cersei Lannister âm thầm bỏ thuốc mê vào rượu trong chuyến đi săn." }
        ]
    },
    {
        id: "stannis_baratheon",
        name: "Stannis Baratheon",
        house: "Baratheon",
        role: "Cựu Lãnh chúa Dragonstone & Vua hợp pháp chính thống",
        image: "https://upload.wikimedia.org/wikipedia/en/c/c1/Stannis_Baratheon_GOT.jpg",
        sigil: "assets/images/sigil_baratheon.jpg",
        status: "Đã mất",
        weapon: "Kiếm sáng Lightbringer & Ma thuật bóng tối",
        motto: "Ours is the Fury",
        quote: "Nhiệm vụ là nhiệm vụ. Luật lệ là luật lệ. Ta không xin Ngai Sắt này, nhưng nó thuộc về ta.",
        bio: "Em trai của Robert Baratheon. Stannis là vị tướng nghiêm nghị, cứng nhắc nhưng tôn trọng luật pháp tuyệt đối. Anh tuyên bố chủ quyền Ngai Sắt sau khi Robert chết và bị Phù thủy Đỏ Melisandre mê hoặc.",
        milestones: [
            { title: "Bảo vệ thành Storm's End (Tiền truyện)", desc: "Nhịn đói ăn cả chuột suốt nhiều tháng giữ vững thành trì trước vòng vây quân Tyrell cứu Robert." },
            { title: "Thảm bại tại trận chiến Vịnh Hắc Thủy (Phần 2)", desc: "Dẫn hạm đội tấn công thủ đô nhưng bị sập bẫy Hoang Hỏa của Tyrion Lannister quét sạch." },
            { title: "Tế sống con gái Shireen & Kết cục (Phần 5)", desc: "Bị Melisandre thuyết phục thiêu sống con gái ruột tế thần để tan tuyết. Bị quân Bolton tiêu diệt tại Winterfell, sau cùng bị Brienne chém đầu báo thù." }
        ]
    },
    {
        id: "renly_baratheon",
        name: "Renly Baratheon",
        house: "Baratheon",
        role: "Cựu Lãnh chúa Storm's End",
        image: "https://upload.wikimedia.org/wikipedia/en/7/7a/Renly_Baratheon_GOT.jpg",
        sigil: "assets/images/sigil_baratheon.jpg",
        status: "Đã mất",
        weapon: "Ngoại giao & Quân đội đồng minh xứ Reach",
        motto: "Ours is the Fury",
        quote: "Tại sao đầu đội vương miện lại phải là kẻ lớn tuổi hơn, thay vì kẻ có thể trị vì tốt hơn?",
        bio: "Em út nhà Baratheon. Renly là chàng trai trẻ điển trai, quảng giao và được lòng giới quý tộc. Anh tự xưng vương bất chấp quyền thừa kế của anh trai Stannis nhờ liên minh mạnh mẽ với nhà Tyrell.",
        milestones: [
            { title: "Trốn chạy khỏi vương đô tự phong vua (Phần 2)", desc: "Trốn đi sau cái chết của Robert, liên minh cưới Margaery Tyrell kéo theo mười vạn đại quân tiến về thủ đô." },
            { title: "Cái chết bí ẩn từ bóng ma (Phần 2)", desc: "Bị bóng ma sát thủ mang khuôn mặt Stannis (do Melisandre sinh hạ từ phép thuật) ám hại đâm chết ngay trong lều hành quân." }
        ]
    },
    {
        id: "gendry_baratheon",
        name: "Gendry Baratheon",
        house: "Baratheon",
        role: "Lãnh chúa Storm's End",
        image: "https://upload.wikimedia.org/wikipedia/en/1/1c/Gendry_GOT.jpg",
        sigil: "assets/images/sigil_baratheon.jpg",
        status: "Còn sống",
        weapon: "Búa chiến đầu rồng bằng thép Valyria tự rèn",
        motto: "Ours is the Fury",
        quote: "Ta chưa từng biết cha ta. Ta chỉ là một người thợ rèn.",
        bio: "Là đứa con hoang duy nhất còn sống sót của Vua Robert Baratheon. Gendry lớn lên làm thợ rèn nghèo khó ở King's Landing, đồng hành cùng Arya qua nhiều sóng gió trước khi được Daenerys sắc phong làm Lãnh chúa.",
        milestones: [
            { title: "Trốn chạy cuộc tàn sát con hoang (Phần 1-3)", desc: "Trốn khỏi thành cùng Đội Tuần Đêm, đồng hành bảo vệ Arya Stark trước khi bị Hội Anh Em bán cho Melisandre lấy máu hiến tế." },
            { title: "Tham gia chống Bóng Trắng (Phần 7-8)", desc: "Gặp lại Jon Snow, cùng đi bắt quỷ ngoài bức tường thành, rèn vũ khí đá kính cho toàn quân tại Winterfell." },
            { title: "Trở thành Lãnh chúa Storm's End hợp pháp (Phần 8)", desc: "Được Daenerys xóa bỏ thân phận con hoang, sắc phong cai trị vùng Storm's End của tổ tiên nhà Baratheon." }
        ]
    }
];

// 2. NEW DRAGONS DATABASE (HOTD & GOT)
const dragons = [
    {
        id: "balerion",
        name: "Balerion (The Black Dread)",
        rider: "Aegon I Targaryen (Kẻ Chinh Phục), Viserys I Targaryen",
        size: "Khổng lồ (Lớn nhất lịch sử Westeros, sải cánh che phủ cả thành phố)",
        power: "Hơi thở siêu nhiệt nóng chảy đá hộc và quặng sắt lập tức",
        strengths: "Lực va đập thể xác nghiền nát, lớp vảy siêu dày bất khả xâm phạm",
        image: "https://images.squarespace-cdn.com/content/v1/5c818bbc8dfc8c5ce94e5d65/1614886700000-DUMMY/balerion.jpg",
        category: "huge",
        bio: "Con rồng vĩ đại nhất của nhà Targaryen, được bay từ Valyria cổ xưa trước khi thảm họa diệt vong xảy ra. Balerion đã giúp Aegon Chinh Phục hợp nhất Bảy Vương Quốc, và chính ngọn lửa đen của nó đã nung chảy kiếm của kẻ thù để đúc nên Ngai Sắt vương quyền.",
        milestones: [
            { title: "Thiêu rụi Harrenhal (Tiền truyện)", desc: "Thiêu chảy tháp đá kiên cố Harrenhal, giết chết Harren Đen cùng toàn bộ dòng tộc bên trong." },
            { title: "Cánh Đồng Lửa (Field of Fire)", desc: "Hợp lực cùng hai rồng Meraxes và Vhagar thiêu cháy 4,000 lính của liên quân đối địch chỉ trong chốc lát." }
        ]
    },
    {
        id: "vhagar",
        name: "Vhagar",
        rider: "Visenya Targaryen, Laena Velaryon, Aemond Targaryen",
        size: "Cực kỳ khổng lồ (Lớn nhất thời kỳ Dance of the Dragons, tương đương Balerion lúc già)",
        power: "Lực phun lửa diện rộng hủy diệt, tiếng gầm rung chuyển nền đất",
        strengths: "Dày dặn kinh nghiệm chiến đấu qua 100 năm chinh chiến, da dày như giáp sắt",
        image: "https://static.wikia.nocookie.net/gameofthrones/images/a/a7/Vhagar_Ep_110.png/revision/latest/scale-to-width-down/1000?cb=20221024082555",
        category: "huge",
        bio: "Được đặt tên theo một vị thần cổ của Valyria. Vhagar là 'nữ hoàng rồng' sống thọ nhất thời kỳ Vũ Điệu Bầy Rồng. Bà là vũ khí chiến lược tối thượng giúp phe Xanh (Greens) uy hiếp và khống chế bầu trời Westeros.",
        milestones: [
            { title: "Trận chiến Storm's End (HOTD S1)", desc: "Mất kiểm soát và nuốt chửng rồng con Arrax cùng Lucerys Velaryon trong cơn bão, chính thức châm ngòi nội chiến." },
            { title: "Đại chiến Rook's Rest (HOTD S2)", desc: "Phục kích cắn gãy cổ Meleys của Rhaenys Targaryen, giành chiến thắng oanh liệt trên bầu trời." },
            { title: "Quyết đấu trên hồ Gods Eye (Vũ Điệu Bầy Rồng)", desc: "Tử chiến với Caraxes của Daemon Targaryen, cả hai con rồng khổng lồ cùng lao xuống hồ nước chết thảm." }
        ]
    },
    {
        id: "drogon",
        name: "Drogon",
        rider: "Daenerys Targaryen",
        size: "Lớn (Con rồng lớn nhất và mạnh nhất trong 3 rồng con của Mẹ Rồng)",
        power: "Lửa đỏ đen cực mạnh, tốc độ phun nhanh liên hoàn",
        strengths: "Nhanh nhẹn, trung thành tuyệt đối và có bản năng sát thủ bẩm sinh",
        image: "https://static.wikia.nocookie.net/gameofthrones/images/7/77/Drogon_dragon.png/revision/latest/scale-to-width-down/1000?cb=20190521134637",
        category: "combat",
        bio: "Hắc Long của Daenerys Targaryen, được cho là hóa thân tái sinh của Balerion Phóng Tử Đen. Drogon luôn là người hộ vệ trung thành bên Mẹ Rồng, giúp cô vượt qua vô vàn cạm bẫy từ Essos đến Westeros.",
        milestones: [
            { title: "Trận chiến Con Đường Vàng (GOT S7)", desc: "Oanh tạc thiêu rụi hạm đội tiếp tế của nhà Lannister, phá hủy máy bắn lao khổng lồ Scorpion." },
            { title: "Đại chiến Winterfell chống Bóng Trắng (GOT S8)", desc: "Chiến đấu điên cuồng trên bầu trời bão tuyết cùng rồng Undead Viserion để bảo vệ Jon Snow." },
            { title: "Nấu chảy Ngai Sắt (GOT S8)", desc: "Gầm thét đau đớn trước thi thể Daenerys, dùng lửa thiêu chảy Ngai Sắt thành đống sắt vụn trước khi cắp xác cô bay đi." }
        ]
    },
    {
        id: "caraxes",
        name: "Caraxes (The Blood Wyrm)",
        rider: "Daemon Targaryen",
        size: "Lớn, thân hình thon dài độc đáo như một con rắn khổng lồ",
        power: "Tiếng rống chói tai áp chế tinh thần, khả năng luồn lách phun lửa hiểm hóc",
        strengths: "Cực kỳ hung tợn, dẻo dai linh hoạt trong các pha nhào lộn trên không",
        image: "https://static.wikia.nocookie.net/gameofthrones/images/4/4c/Caraxes_Promo.png/revision/latest/scale-to-width-down/1000?cb=20220830093840",
        category: "combat",
        bio: "Thường được gọi là 'Sói Huyết' vì vảy đỏ như máu và tính khí cực kỳ hung dữ. Thân hình dài ngoằn kỳ lạ giúp Caraxes chuyển động vô cùng linh hoạt trong không trung, là át chủ bài của phe Đen (Blacks).",
        milestones: [
            { title: "Chiến dịch Đá Bước (Stepstones) (HOTD S1)", desc: "Càn quét tiêu diệt lực lượng nổi loạn Crabfeeder trong các hang đá hẹp ở vịnh." },
            { title: "Quyết đấu trên hồ Gods Eye (Vũ Điệu Bầy Rồng)", desc: "Cắn xé gãy cổ Vhagar khi Daemon đâm thanh Dark Sister xuyên mắt Aemond, cả hai rơi xuống nước." }
        ]
    },
    {
        id: "syrax",
        name: "Syrax",
        rider: "Rhaenyra Targaryen",
        size: "Trung bình lớn, vảy màu vàng chanh lộng lẫy",
        power: "Hơi thở lửa vàng nóng rực, lực cắn mạnh mẽ",
        strengths: "Tốc độ bay xuất sắc, được nuôi dưỡng chu đáo bằng thịt tươi",
        image: "https://static.wikia.nocookie.net/gameofthrones/images/b/bd/Syrax_Promo.png/revision/latest/scale-to-width-down/1000?cb=20220830094056",
        category: "beautiful",
        bio: "Hoàng Kim Long thuộc quyền sở hữu của Nữ hoàng Rhaenyra Targaryen. Được đặt tên theo một nữ thần cổ của Valyria, Syrax đồng hành cùng Rhaenyra từ khi cô còn là một cô bé tiểu thư quý tộc.",
        milestones: [
            { title: "Cuộc đàm phán Dragonstone (HOTD S1)", desc: "Xuất hiện uy nghiêm ngăn cản Daemon Targaryen nổi loạn cướp trứng rồng." },
            { title: "Bạo loạn Long Huyệt (Vũ Điệu Bầy Rồng)", desc: "Bay xuống chiến đấu bảo vệ tổ rồng trước đám đông cuồng loạn giận dữ ở King's Landing." }
        ]
    },
    {
        id: "sunfyre",
        name: "Sunfyre (The Golden)",
        rider: "Aegon II Targaryen",
        size: "Trung bình, vảy óng ánh lấp lánh như vàng ròng tự nhiên",
        power: "Lửa vàng chói lọi cực nóng, ý chí sinh tồn phi thường",
        strengths: "Vảy phản chiếu ánh sáng chói mắt kẻ thù, liên kết tâm linh cực chặt với chủ nhân",
        image: "https://static.wikia.nocookie.net/gameofthrones/images/5/5f/Sunfyre_HOTD_S2E4.png/revision/latest/scale-to-width-down/1000?cb=20240607143524",
        category: "beautiful",
        bio: "Được mệnh danh là con rồng đẹp nhất thế giới từng được biết đến. Sunfyre sở hữu tình yêu và sự trung thành bất diệt đối với Aegon II, vượt qua ngàn dặm thương tích rách cánh để bay về bảo vệ chủ.",
        milestones: [
            { title: "Đại chiến Rook's Rest (HOTD S2)", desc: "Chiến đấu dũng cảm đối mặt với Meleys, chịu vết thương nặng rách cánh rơi xuống rừng cây." },
            { title: "Giành lại Dragonstone (Vũ Điệu Bầy Rồng)", desc: "Tiêu diệt con rồng hoang Grey Ghost và trực tiếp thiêu sống Rhaenyra Targaryen trả thù cho Aegon II." }
        ]
    },
    {
        id: "meleys",
        name: "Meleys (The Red Queen)",
        rider: "Rhaenys Targaryen",
        size: "Lớn, vảy đỏ thẫm đính các sừng màu đồng thau như vương miện",
        power: "Tốc độ bay vô địch, móng vuốt vuốt bén có sức xé xác cực cao",
        strengths: "Con rồng nhanh nhất thế giới thời điểm đó, cực kỳ can đảm",
        image: "https://static.wikia.nocookie.net/gameofthrones/images/b/bd/Meleys_HOTD_S2E4.png/revision/latest/scale-to-width-down/1000?cb=20240607143423",
        category: "combat",
        bio: "Rồng chiến của 'Nữ hoàng hụt' Rhaenys Targaryen. Được mệnh danh là 'Hồng Hậu' vì sắc đỏ rực rỡ, Meleys khi xung trận là một quái thú bất khả chiến bại nhờ tốc độ bay xé gió và sự hung tợn vô song.",
        milestones: [
            { title: "Đột kích Lễ Đăng Quang (HOTD S1)", desc: "Phá nát sàn đá Dragonpit vươn lên gầm rú uy hiếp phe Greens trước khi cất cánh trốn thoát." },
            { title: "Đại chiến tại Rook's Rest (HOTD S2)", desc: "Độc đấu oanh liệt cùng lúc cả Sunfyre và Vhagar. Cắn xé phá hủy cánh Sunfyre trước khi bị Vhagar phục kích từ vách đá rơi xuống tử nạn." }
        ]
    },
    {
        id: "vermithor",
        name: "Vermithor (The Bronze Fury)",
        rider: "Jaehaerys I Targaryen, Hugh Hammer",
        size: "Khổng lồ (Lớn thứ ba lịch sử Westeros, chỉ sau Balerion và Vhagar)",
        power: "Luồng lửa đồng thau nóng bỏng thiêu rụi cả đạo quân chỉ trong vài giây",
        strengths: "Lớp vảy màu đồng cực kỳ cứng chịu lực tốt, sức chống chịu bền bỉ",
        image: "https://static.wikia.nocookie.net/gameofthrones/images/f/f6/Vermithor_Promo_S2.png/revision/latest/scale-to-width-down/1000?cb=20240608183544",
        category: "huge",
        bio: "Cổ long huyền thoại của Vua Jaehaerys I. Vermithor là sinh vật khổng lồ mang dòng máu dũng mãnh, nằm ẩn dật trong Long Huyệt núi lửa Dragonstone hàng chục năm cho đến khi được Hugh Hammer chinh phục thành công.",
        milestones: [
            { title: "Sự kiện Sowing of the Seeds (HOTD S2)", desc: "Thiêu sống hàng chục binh sĩ thử thách trước khi khuất phục dưới sự dũng cảm của Hugh Hammer." },
            { title: "Trận chiến Tumbleton (Vũ Điệu Bầy Rồng)", desc: "Cùng Hugh Hammer phản bội oanh tạc thiêu rụi toàn bộ thị trấn Tumbleton chìm trong biển lửa đồng thau." }
        ]
    }
];

// 3. INSPIRATIONAL QUOTES SLIDER
const quotes = [
    { text: "Winter is coming.", author: "Nhà Stark" },
    { text: "When you play the game of thrones, you win or you die.", author: "Cersei Lannister" },
    { text: "A Lannister always pays his debts.", author: "Ngạn ngữ Westeros" },
    { text: "Fire and Blood.", author: "Nhà Targaryen" },
    { text: "Chaos isn't a pit. Chaos is a ladder.", author: "Petyr Baelish" },
    { text: "The things I do for love.", author: "Jaime Lannister" },
    { text: "Not today.", author: "Syrio Forel / Arya Stark" }
];

// 4. SNOWFLAKE PARTICLES EFFECT
class ParticleSystem {
    constructor() {
        this.canvas = document.getElementById('particles-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.maxParticles = 80;
        
        this.resize();
        window.addEventListener('resize', () => this.resize());
        
        for (let i = 0; i < this.maxParticles; i++) {
            this.particles.push(this.createParticle(true));
        }
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    createParticle(randomY = false) {
        return {
            x: Math.random() * this.canvas.width,
            y: randomY ? Math.random() * this.canvas.height : -10,
            size: Math.random() * 2.5 + 0.5,
            speedY: Math.random() * 1.2 + 0.4,
            speedX: Math.random() * 0.8 - 0.4,
            opacity: Math.random() * 0.6 + 0.2
        };
    }

    update() {
        for (let i = 0; i < this.particles.length; i++) {
            let p = this.particles[i];
            p.y += p.speedY;
            p.x += p.speedX;

            if (p.y > this.canvas.height || p.x < 0 || p.x > this.canvas.width) {
                this.particles[i] = this.createParticle(false);
            }
        }
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        for (let p of this.particles) {
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            this.ctx.fillStyle = `rgba(201, 160, 84, ${p.opacity * 0.35})`; // Gold dust
            this.ctx.fill();
        }
    }

    animate() {
        this.update();
        this.draw();
        requestAnimationFrame(() => this.animate());
    }
}

// 5. SPA TAB NAVIGATION ROUTING
function handleRouting() {
    const hash = window.location.hash || '#home';
    const targetSection = document.querySelector(hash);
    
    if (targetSection && targetSection.classList.contains('page-section')) {
        // Deactivate all page sections
        document.querySelectorAll('.page-section').forEach(sec => {
            sec.classList.remove('active', 'visible');
        });
        
        // Activate target section
        targetSection.classList.add('active');
        
        // Trigger reflow and add visibility class for animation
        setTimeout(() => {
            targetSection.classList.add('visible');
        }, 50);
        
        // Highlight active class on desktop links
        document.querySelectorAll('.nav-link').forEach(link => {
            if (link.getAttribute('href') === hash) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });

        // Highlight active class on mobile drawer links
        document.querySelectorAll('.mobile-link').forEach(link => {
            if (link.getAttribute('href') === hash) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
        
        // Scroll to top
        window.scrollTo(0, 0);
    }
}

// 6. MAIN APPLICATION BOOTSTRAP
document.addEventListener('DOMContentLoaded', () => {
    
    // Start Background Particle System
    const particleSystem = new ParticleSystem();
    particleSystem.animate();

    // Setup SPA Routing listeners
    window.addEventListener('hashchange', handleRouting);
    handleRouting(); // Run once initially on load

    // Initialize Quote Slider
    initQuoteSlider();

    // Load Characters Grid
    renderCharacters('all');

    // Load Dragons Grid
    renderDragons('all');

    // Setup Header Scroll Effect
    const navbar = document.querySelector('.navbar-container');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle
    const mobileBtn = document.getElementById('mobile-menu-toggle');
    const mobileNav = document.getElementById('mobile-nav');
    
    mobileBtn.addEventListener('click', () => {
        mobileNav.classList.toggle('active');
        const icon = mobileBtn.querySelector('i');
        if (mobileNav.classList.contains('active')) {
            icon.className = 'fa-solid fa-xmark';
        } else {
            icon.className = 'fa-solid fa-bars';
        }
    });

    // Close Mobile Drawer on Link Click
    document.querySelectorAll('.mobile-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileNav.classList.remove('active');
            mobileBtn.querySelector('i').className = 'fa-solid fa-bars';
        });
    });

    // Character Filter Buttons Behavior
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const house = btn.getAttribute('data-filter');
            
            const grid = document.getElementById('characters-grid');
            grid.style.opacity = 0;
            grid.style.transform = 'translateY(10px)';
            
            setTimeout(() => {
                renderCharacters(house);
                grid.style.opacity = 1;
                grid.style.transform = 'translateY(0)';
            }, 300);
        });
    });

    // Dragon Filter Buttons Behavior
    const dragonFilterButtons = document.querySelectorAll('.dragon-filter-btn');
    dragonFilterButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            dragonFilterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const category = btn.getAttribute('data-filter');
            
            const grid = document.getElementById('dragons-grid');
            grid.style.opacity = 0;
            grid.style.transform = 'translateY(10px)';
            
            setTimeout(() => {
                renderDragons(category);
                grid.style.opacity = 1;
                grid.style.transform = 'translateY(0)';
            }, 300);
        });
    });

    // Modal Close Triggers
    const modal = document.getElementById('character-modal');
    const modalCloseBtn = document.getElementById('modal-close-btn');
    modalCloseBtn.addEventListener('click', () => {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto'; // Re-enable scrolling
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });

    // ═══════════════════════════════════════════════════════════
    // AUDIO PLAYER — Game of Thrones Main Title by Ramin Djawadi
    // ═══════════════════════════════════════════════════════════
    const audioToggle = document.getElementById('audio-toggle');
    const audioIcon   = document.getElementById('audio-icon');
    const audioLabel  = document.getElementById('audio-label');
    const bgAudio     = document.getElementById('bg-audio');
    let isPlaying = false;

    audioToggle.addEventListener('click', () => {
        if (!isPlaying) {
            // Force load src if not already loading
            if (bgAudio.readyState === 0) bgAudio.load();

            bgAudio.play()
                .then(() => {
                    isPlaying = true;
                    audioIcon.className  = 'fa-solid fa-volume-high';
                    audioLabel.textContent = 'Đang phát';
                    audioToggle.classList.add('playing');
                })
                .catch(err => {
                    console.warn('Audio play blocked:', err);
                    audioLabel.textContent = 'Lỗi audio';
                });
        } else {
            bgAudio.pause();
            isPlaying = false;
            audioIcon.className  = 'fa-solid fa-volume-xmark';
            audioLabel.textContent = 'Nhạc';
            audioToggle.classList.remove('playing');
        }
    });

    // Handle audio end (loop is set but just in case)
    bgAudio.addEventListener('ended', () => {
        isPlaying = false;
        audioIcon.className  = 'fa-solid fa-volume-xmark';
        audioLabel.textContent = 'Nhạc';
        audioToggle.classList.remove('playing');
    });

    // ═══════════════════════════════════════════════
    // HERO STAT COUNTER ANIMATION
    // ═══════════════════════════════════════════════
    const animateCounters = () => {
        document.querySelectorAll('.stat-num').forEach(el => {
            const target = parseInt(el.getAttribute('data-target') || '0', 10);
            let current = 0;
            const step = Math.ceil(target / 40);
            const timer = setInterval(() => {
                current = Math.min(current + step, target);
                el.textContent = current + (target >= 100 ? '' : '+');
                if (current >= target) {
                    el.textContent = target + '+';
                    clearInterval(timer);
                }
            }, 45);
        });
    };
    // Trigger after slight delay to let hero render
    setTimeout(animateCounters, 1200);


    // Reveal elements on scroll
    const revealElements = () => {
        const reveals = document.querySelectorAll('.reveal');
        reveals.forEach(rev => {
            const windowHeight = window.innerHeight;
            const elementTop = rev.getBoundingClientRect().top;
            const elementVisible = 120;
            
            if (elementTop < windowHeight - elementVisible) {
                rev.classList.add('active');
            }
        });
    };
    window.addEventListener('scroll', revealElements);
    revealElements(); // Run initially
});

// 7. INITIATE QUOTE SLIDER LOGIC
function initQuoteSlider() {
    const container = document.getElementById('quote-slider');
    
    quotes.forEach((q, idx) => {
        const item = document.createElement('div');
        item.className = `quote-item ${idx === 0 ? 'active' : ''}`;
        item.innerHTML = `
            <p class="quote-text">"${q.text}"</p>
            <span class="quote-author">— ${q.author}</span>
        `;
        container.appendChild(item);
    });

    let currentIdx = 0;
    const items = container.querySelectorAll('.quote-item');
    
    let intervalId = setInterval(() => {
        if(items.length > 0) {
            items[currentIdx].classList.remove('active');
            currentIdx = (currentIdx + 1) % items.length;
            items[currentIdx].classList.add('active');
        }
    }, 4500);
}

// HELPER: Get house accent color
function getHouseColor(house) {
    const colors = {
        Stark:      '#5b8dd9',
        Lannister:  '#c9a054',
        Targaryen:  '#c0392b',
        Baratheon:  '#d4af37',
    };
    return colors[house] || '#c9a054';
}

// HELPER: Generate SVG fallback placeholder
function makePlaceholderSVG(label, color) {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="500" viewBox="0 0 400 500">
        <defs>
            <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stop-color="#1a1a20"/>
                <stop offset="1" stop-color="#0a0a0c"/>
            </linearGradient>
        </defs>
        <rect width="400" height="500" fill="url(%23bg)"/>
        <rect x="0" y="0" width="400" height="500" fill="none" stroke="${color}" stroke-width="2" opacity="0.25"/>
        <text x="200" y="260" font-size="80" text-anchor="middle" fill="${color}" opacity="0.6" font-family="serif">${label.charAt(0).toUpperCase()}</text>
        <text x="200" y="340" font-size="16" text-anchor="middle" fill="${color}" opacity="0.4" font-family="sans-serif">${label.toUpperCase()}</text>
    </svg>`;
    return 'data:image/svg+xml,' + encodeURIComponent(svg);
}

// 8. RENDER CHARACTERS GRID
function renderCharacters(houseFilter) {
    const grid = document.getElementById('characters-grid');
    grid.innerHTML = '';

    const filtered = houseFilter === 'all' 
        ? characters 
        : characters.filter(c => c.house.toLowerCase() === houseFilter.toLowerCase());

    filtered.forEach(c => {
        const houseColor = getHouseColor(c.house);
        const fallbackSrc = makePlaceholderSVG(c.name, houseColor);
        const card = document.createElement('div');
        card.className = 'character-card';
        card.innerHTML = `
            <div class="char-img-container">
                <img src="${c.image}" alt="${c.name}" class="char-img" loading="lazy"
                     referrerpolicy="no-referrer"
                     onerror="this.onerror=null;this.src='${fallbackSrc}'">
                <div class="char-overlay"></div>
                <div class="char-sigil-badge" title="Gia Huy Nhà ${c.house}">
                    <img src="${c.sigil}" alt="${c.house} sigil">
                </div>
            </div>
            <div class="char-info">
                <span class="char-house" style="color:${houseColor}">Nhà ${c.house}</span>
                <h3 class="char-name">${c.name}</h3>
                <p class="char-role">${c.role}</p>
                <button class="char-action-btn" onclick="openDetails('${c.id}')">
                    <span>Xem Hành Trình</span>
                    <i class="fa-solid fa-crown"></i>
                </button>
            </div>
        `;
        grid.appendChild(card);
    });
}

// 9. RENDER DRAGONS GRID
function renderDragons(categoryFilter) {
    const grid = document.getElementById('dragons-grid');
    if (!grid) return;
    grid.innerHTML = '';

    const catLabels = {
        huge:     { label: 'Kích Thước Khổng Lồ', color: '#7b2d8b' },
        combat:   { label: 'Thiện Chiến & Hung Tàn', color: '#c0392b' },
        beautiful:{ label: 'Tuyệt Mỹ & Tốc Độ',   color: '#c9a054' },
    };

    const filtered = categoryFilter === 'all' 
        ? dragons 
        : dragons.filter(d => d.category.toLowerCase() === categoryFilter.toLowerCase());

    filtered.forEach(d => {
        const catInfo  = catLabels[d.category] || { label: 'Rồng Huyền Thoại', color: '#c9a054' };
        const fallbackSrc = makePlaceholderSVG('🐉 ' + d.name, catInfo.color);
        const card = document.createElement('div');
        card.className = 'character-card';
        card.innerHTML = `
            <div class="char-img-container">
                <img src="${d.image}" alt="${d.name}" class="char-img" loading="lazy"
                     referrerpolicy="no-referrer"
                     onerror="this.onerror=null;this.src='${fallbackSrc}'">
                <div class="char-overlay"></div>
                <div class="char-sigil-badge" title="Người cưỡi: ${d.rider}">
                    <i class="fa-solid fa-fire" style="color: var(--gold-primary); font-size: 1.1rem;"></i>
                </div>
            </div>
            <div class="char-info">
                <span class="char-house" style="color:${catInfo.color}">${catInfo.label}</span>
                <h3 class="char-name">${d.name}</h3>
                <p class="char-role">Người cưỡi: ${d.rider}</p>
                <button class="char-action-btn" onclick="openDragonDetails('${d.id}')">
                    <span>Xem Sức Mạnh</span>
                    <i class="fa-solid fa-fire-burner"></i>
                </button>
            </div>
        `;
        grid.appendChild(card);
    });
}

// 10. OPEN MODAL DETAILS FOR CHARACTER
function openDetails(charId) {
    const char = characters.find(c => c.id === charId);
    if (!char) return;

    const modalBody = document.getElementById('modal-body-content');
    
    let milestonesHTML = '';
    if (char.milestones && char.milestones.length > 0) {
        milestonesHTML = `
            <h4 class="modal-subtitle">Các ải hành trình trong phim</h4>
            <div class="modal-milestones">
                <div class="milestone-list">
                    ${char.milestones.map(m => `
                        <div class="milestone-item">
                            <div class="milestone-title">${m.title}</div>
                            <div class="milestone-desc">${m.desc}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    modalBody.innerHTML = `
        <div class="char-details-layout">
            <div class="modal-img-wrapper">
                <img class="modal-img" src="${char.image}" alt="${char.name}"
                     referrerpolicy="no-referrer"
                     onerror="this.onerror=null;this.src='${makePlaceholderSVG(char.name, getHouseColor(char.house))}'">
            </div>
            <div class="modal-info-panel">
                <span class="modal-house-title">Gia tộc ${char.house}</span>
                <h2 class="modal-char-name">${char.name}</h2>
                <p class="modal-char-role">${char.role}</p>
                <div class="modal-quote">"${char.quote}"</div>
                
                <h4 class="modal-subtitle">Tiểu sử cốt truyện</h4>
                <p class="modal-bio">${char.bio}</p>
                
                ${milestonesHTML}
                
                <h4 class="modal-subtitle">Thông tin thuộc tính</h4>
                <div class="modal-attributes">
                    <div class="attribute-item">
                        <div class="attribute-label">Trạng thái</div>
                        <div class="attribute-value" style="color: ${char.status.includes('Còn sống') ? '#10b981' : '#ef4444'}">${char.status}</div>
                    </div>
                    <div class="attribute-item">
                        <div class="attribute-label">Vũ khí đặc trưng</div>
                        <div class="attribute-value">${char.weapon}</div>
                    </div>
                    <div class="attribute-item">
                        <div class="attribute-label">Gia huy</div>
                        <div class="attribute-value">Gia tộc ${char.house}</div>
                    </div>
                    <div class="attribute-item">
                        <div class="attribute-label">Châm ngôn</div>
                        <div class="attribute-value" style="font-style: italic; color: var(--gold-primary); font-family: var(--font-heading)">"${char.motto}"</div>
                    </div>
                </div>
            </div>
        </div>
    `;

    const modal = document.getElementById('character-modal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// 11. OPEN MODAL DETAILS FOR DRAGON
function openDragonDetails(dragonId) {
    const dragon = dragons.find(d => d.id === dragonId);
    if (!dragon) return;

    const modalBody = document.getElementById('modal-body-content');
    
    let milestonesHTML = '';
    if (dragon.milestones && dragon.milestones.length > 0) {
        milestonesHTML = `
            <h4 class="modal-subtitle">Các chiến tích lịch sử</h4>
            <div class="modal-milestones">
                <div class="milestone-list">
                    ${dragon.milestones.map(m => `
                        <div class="milestone-item">
                            <div class="milestone-title">${m.title}</div>
                            <div class="milestone-desc">${m.desc}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    modalBody.innerHTML = `
        <div class="char-details-layout">
            <div class="modal-img-wrapper">
                <img class="modal-img" src="${dragon.image}" alt="${dragon.name}">
            </div>
            <div class="modal-info-panel">
                <span class="modal-house-title" style="color: var(--gold-primary);">Rồng Thần Targaryen</span>
                <h2 class="modal-char-name">${dragon.name}</h2>
                <p class="modal-char-role">Người cưỡi: ${dragon.rider}</p>
                <div class="modal-quote" style="border-color: #ef4444; color: #fca5a5;">"Lửa và Máu - Biểu tượng sức mạnh tuyệt đối của vương triều Valyria."</div>
                
                <h4 class="modal-subtitle">Truyền thuyết & Mô tả</h4>
                <p class="modal-bio">${dragon.bio}</p>
                
                ${milestonesHTML}
                
                <h4 class="modal-subtitle">Thuộc tính rồng chiến</h4>
                <div class="modal-attributes">
                    <div class="attribute-item">
                        <div class="attribute-label">Kỵ sĩ cưỡi</div>
                        <div class="attribute-value">${dragon.rider}</div>
                    </div>
                    <div class="attribute-item">
                        <div class="attribute-label">Độ to / Kích thước</div>
                        <div class="attribute-value">${dragon.size}</div>
                    </div>
                    <div class="attribute-item">
                        <div class="attribute-label">Cường độ sức mạnh</div>
                        <div class="attribute-value">${dragon.power}</div>
                    </div>
                    <div class="attribute-item">
                        <div class="attribute-label">Ưu điểm & Đặc trưng</div>
                        <div class="attribute-value" style="color: var(--gold-primary); font-weight: 600;">${dragon.strengths}</div>
                    </div>
                </div>
            </div>
        </div>
    `;

    const modal = document.getElementById('character-modal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Make functions globally accessible
window.openDetails = openDetails;
window.openDragonDetails = openDragonDetails;
window.renderDragons = renderDragons;
window.renderCharacters = renderCharacters;
