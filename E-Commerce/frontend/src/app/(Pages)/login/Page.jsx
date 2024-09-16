import React from "react";
import { Link } from "react-router-dom";

//___ CSS ___//
import "./Login.scss";

//___ Components ___//
import Header from "../../Components/Header/Header";
import Form from "../../Components/Form/Form";
import Footer from "../../Components/Footer/Footer";

const page = () => {
  const inputField = [
    {
      field: "name",
      type: "text",
      placeholder: "Please enter your phone number or email",
      className: "inputBox",
    },
    {
      field: "password",
      type: "password",
      placeholder: "Please enter your password",
      className: "inputBox d-flex",
    },
  ];

  return (
    <>
      <Header />
      <div className="Login">
        <Form
          mainTitle="Welcome to Company !"
          mainRightTitle={`New member?`}
          title="Login"
          url="/login"
          inputFields={inputField}
          loginOrSingupUrl="/signup"
          loginOrSingup="Register"
          resetPass="Reset Your Password"
        />
        {/* <h3>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus
          voluptatem rem animi ex esse dolore molestias, laboriosam maiores quod
          tenetur? Ad deserunt dolorum aliquam atque distinctio voluptatum, hic
          ut eius esse omnis iste corporis voluptate magni cupiditate tempora
          iure molestiae enim fugiat id consequatur numquam. Illo laudantium
          atque, earum temporibus delectus iure quibusdam culpa dicta odio
          quidem alias. Nemo quas eligendi, possimus iste aliquam ducimus
          provident adipisci debitis? Delectus cupiditate est architecto,
          impedit pariatur reprehenderit? Voluptas corrupti reprehenderit eum,
          nostrum, deleniti aut culpa eos magnam nemo perferendis itaque
          doloribus sint fugiat, quisquam hic quo dolores sequi voluptate
          ratione aspernatur! Enim nihil ab inventore dolorem cupiditate esse,
          amet, eligendi vero quia velit accusamus natus et temporibus optio,
          corrupti voluptatem officiis sunt! Delectus, rem. Deserunt corrupti
          tempora temporibus at dolorum, saepe cupiditate natus molestias
          laboriosam magnam deleniti omnis veniam consequuntur cum nemo,
          reprehenderit, porro dignissimos? Consequuntur quis consequatur sed
          odio, rem sapiente, iure architecto nemo velit itaque fugiat, id
          distinctio! Laborum hic molestiae id nam fugiat veniam ex cumque
          exercitationem quos consectetur quidem asperiores ducimus fugit
          recusandae iusto, ipsum pariatur maiores optio aliquid dolores
          veritatis natus? Eos temporibus praesentium provident debitis quam
          sunt, modi cupiditate esse corrupti ratione quidem accusantium
          consectetur recusandae veniam deleniti earum similique? Dignissimos
          quo earum, cupiditate ipsa fugiat facilis impedit facere architecto
          repudiandae, nemo porro optio aspernatur ab blanditiis reiciendis
          commodi quod voluptatibus est quam inventore asperiores quos
          reprehenderit culpa? Officia numquam minus commodi doloremque velit
          eum alias eveniet asperiores maiores. Officia ad dolores sint. Autem
          nihil voluptatibus corrupti id accusantium eius voluptate quod
          asperiores laboriosam voluptatem libero unde error veniam, quam
          excepturi molestiae quae itaque facere assumenda totam tenetur. Iusto
          nemo eaque odio ipsa necessitatibus iste distinctio reiciendis
          repellendus deserunt officia tempora mollitia qui veritatis alias
          eligendi doloribus architecto ut magnam, commodi, est quidem, saepe
          corrupti? Ea, modi quae inventore perferendis praesentium adipisci
          nisi voluptas deserunt est sapiente similique expedita itaque
          consequatur voluptatem voluptatibus qui quas animi? Pariatur eum a
          perspiciatis quod voluptatem veritatis earum ducimus. Expedita sunt
          fuga dolor magnam ipsam pariatur, tenetur ullam! Ratione animi
          officiis, odit laboriosam vitae cumque soluta libero. Alias
          repellendus est quaerat laudantium expedita hic quas nam soluta,
          consequatur, sed voluptas eum rem pariatur iure accusamus ex
          cupiditate? Consequuntur ullam neque vel ipsum voluptatum dignissimos
          sed sint. Hic officiis, maxime ducimus, vel velit suscipit ratione
          blanditiis necessitatibus maiores in commodi eum quos labore sint
          iusto nisi voluptate obcaecati eius fugiat, laborum sit sequi adipisci
          consequatur. Veritatis, eius? Deserunt, numquam dolore dicta
          dignissimos libero quibusdam omnis aperiam. Minima reiciendis, dolore,
          eos in odio doloremque accusamus expedita laboriosam quas aut,
          possimus voluptatum inventore illum enim qui totam non magni obcaecati
          quia ex a hic est nisi dolor. Quia labore eligendi, neque libero
          nostrum atque facere illo nisi unde minima aspernatur corporis odio ex
          sint totam. Dolore neque earum dicta quos ipsa odit? Eius totam veniam
          nam deserunt, perspiciatis libero pariatur sequi reprehenderit quia
          voluptatum itaque quibusdam iste, praesentium suscipit omnis tempora
          assumenda? Eos ducimus quam labore at modi possimus? Accusantium
          deserunt tempora dolorem dicta voluptates recusandae dolorum aliquid
          obcaecati aperiam iste facilis vero fuga eos provident quibusdam
          aliquam, voluptas at ipsam harum similique rerum sed placeat impedit.
          Excepturi et cum deserunt harum natus illo odit quisquam nobis,
          nostrum unde magnam corrupti ratione, minima similique nulla vel quae,
          aliquid tempore sit? Accusantium odit minus vitae porro impedit neque
          ab mollitia maiores, delectus ullam optio ipsa quis magni soluta
          placeat nam harum. Alias, sunt? Temporibus vitae culpa placeat quia
          explicabo, maiores voluptatum perferendis accusamus ratione modi
          veritatis voluptates. Vero dolores, hic expedita laudantium
          perferendis, sint delectus ducimus eveniet tempora doloremque
          accusamus assumenda commodi suscipit ad vitae saepe modi quisquam!
          Minima non, labore in minus voluptatum explicabo perferendis corporis
          alias quam nihil ipsa illo at. Praesentium eius deleniti sapiente
          laudantium aut quisquam nostrum non, soluta nesciunt minus aliquam
          provident magni adipisci voluptates earum esse delectus nobis corporis
          perspiciatis exercitationem accusantium rerum maiores consequuntur
          facilis. Autem fugiat temporibus quos reprehenderit perspiciatis
          pariatur repellat fugit inventore debitis neque natus quo ipsam,
          doloremque officiis minus! Maiores, praesentium neque ad, quis vel,
          perferendis vitae minima modi quia itaque dolor similique aut illo
          deserunt. Repellat aut harum eos incidunt hic nisi suscipit beatae
          magnam, error, dolores quasi saepe tempora eligendi ut, odio placeat!
          Quod accusantium illo provident distinctio possimus sunt impedit
          nesciunt, ducimus esse expedita natus sapiente ullam aut voluptatum
          reprehenderit qui nam totam! Suscipit veniam quasi nesciunt possimus
          velit fugit delectus consequatur, rerum sed similique praesentium enim
          voluptates sint cupiditate a, laboriosam explicabo. Nihil autem
          ducimus quis doloremque et impedit ab laboriosam qui voluptatem
          numquam, soluta enim omnis veniam ipsa rerum similique totam vel iste
          quos recusandae laborum nisi velit. Repellat amet sapiente error iste
          deserunt totam, nostrum exercitationem maiores doloremque! Animi id
          est vero magni, odit dolorum nemo a dolorem doloribus, minus voluptas
          unde possimus quo modi nisi optio alias molestiae non minima? Harum,
          facilis ex! Quos quibusdam facere minima vitae a iste laudantium
          libero! Ratione doloremque iste, quos, saepe maxime accusamus numquam
          officia adipisci obcaecati eius mollitia! Repudiandae officia nobis
          quia placeat vero neque deserunt veritatis rem magnam. Explicabo, quae
          expedita. Pariatur earum quod provident ab deserunt rem quia unde sunt
          dolores ex aperiam molestiae impedit, vel obcaecati possimus veritatis
          nobis doloribus maxime corporis. Nostrum fuga molestias accusamus
          incidunt fugiat exercitationem reiciendis labore earum quasi
          recusandae error iusto consequuntur vitae accusantium perferendis ex
          voluptas eos sit non ducimus, rerum asperiores? Exercitationem quaerat
          unde suscipit, et adipisci aliquam, sint accusamus deserunt eveniet
          veritatis perspiciatis ex quis quisquam eligendi. Quod obcaecati earum
          voluptates voluptatibus fuga sed iste quam dignissimos ea, possimus
          perferendis pariatur. Labore optio maiores asperiores voluptates quis
          distinctio fugiat praesentium doloribus reprehenderit quo temporibus
          perferendis debitis id deleniti magnam beatae a, eveniet ducimus earum
          iure veritatis blanditiis saepe officiis autem! Suscipit, perferendis
          hic mollitia asperiores repellat dolorum voluptatum ab unde animi
          velit impedit quod fugit et placeat. Nam omnis quasi, nisi, voluptatem
          aut necessitatibus hic quisquam similique soluta praesentium ut
          consectetur sapiente laborum vero. Corrupti temporibus voluptatum
          cumque deserunt id. Error, deleniti aspernatur. Reiciendis asperiores
          dolore officia harum quia voluptatum voluptates odit maxime
          repudiandae, suscipit aut porro atque sunt consequatur nemo dolorum
          earum natus sed. Explicabo, nulla nihil quibusdam perspiciatis,
          doloribus fugiat dignissimos adipisci in consectetur nisi molestias
          magnam, alias itaque? Ipsum, placeat illum? Mollitia exercitationem
          totam officiis atque repellendus laudantium, dolor consequatur
          laboriosam voluptates. Officia molestias suscipit eius tempora
          temporibus nulla architecto commodi reprehenderit necessitatibus sed
          illo sequi rem, voluptas ea doloribus placeat? Voluptas sint nam,
          fugiat suscipit porro atque earum, nobis perspiciatis ullam
          consequuntur quis libero adipisci minima quae ea eaque reprehenderit
          aliquam aliquid accusamus? Nulla consectetur enim saepe explicabo illo
          doloribus iure facere est quas, dolore non! Ut accusantium quisquam
          sapiente soluta dolore quo laborum hic culpa quasi corrupti
          aspernatur, molestiae quos, cumque atque corporis eaque. Earum at id
          possimus dolore fugiat aliquid placeat perferendis aspernatur delectus
          quis mollitia eos cum, hic necessitatibus, exercitationem adipisci
          consectetur alias recusandae doloremque quia excepturi? Et, in. Iste
          debitis possimus eaque autem molestias numquam voluptas illum repellat
          rerum, ducimus atque obcaecati ab unde. Obcaecati, necessitatibus
          atque. Ab rerum corporis culpa, asperiores magni ducimus tempore
          perferendis iure obcaecati aperiam ex qui dolor necessitatibus
          dignissimos placeat quidem praesentium dolore numquam. Dolorem maiores
          nisi beatae minus minima nostrum, dicta veniam, necessitatibus
          inventore eius alias vel molestias assumenda earum iusto recusandae
          vitae laudantium id cupiditate ipsa doloribus. Laudantium id quia quod
          fugiat voluptate assumenda officiis iusto voluptatibus cum quisquam
          excepturi, voluptates libero et ab vero amet soluta similique pariatur
          obcaecati, nesciunt alias illo? Explicabo beatae dolorem voluptatibus,
          deleniti nostrum vero. Veritatis quibusdam mollitia tempore laudantium
          quas omnis natus, magni maxime ex. Temporibus reiciendis natus
          perspiciatis esse minus ducimus fuga alias similique nisi ipsum
          quibusdam, debitis quo velit saepe officiis consectetur dolores
          tempora? Repellendus aperiam temporibus debitis vel at voluptates
          perferendis dolor necessitatibus hic, numquam quidem eligendi placeat?
          Repellendus temporibus aliquid ducimus hic provident nulla natus? Quod
          id eaque voluptate dicta corporis dolor quis molestiae! Sapiente hic
          odio omnis eos nobis, culpa quam fuga quis cupiditate voluptas ipsam,
          id cumque commodi, quia quae sint neque dolorem sequi excepturi
          eveniet! Vel voluptas quis veritatis magnam porro possimus repellat
          veniam neque illo odit vitae dignissimos doloremque accusamus omnis
          optio, voluptatum sit autem distinctio obcaecati! A quam beatae,
          eveniet soluta magnam minus et voluptates omnis itaque! Soluta
          voluptas maxime fugit velit architecto facilis a sequi porro eos
          itaque quos laboriosam consequatur voluptatibus id fuga illum rerum
          nemo quidem, enim nam eum amet neque. Optio aliquam esse error nemo
          vitae pariatur ut ad vel nostrum blanditiis commodi alias tempora,
          omnis repellat quas neque totam similique adipisci! Dolorum
          repudiandae explicabo quaerat, cumque reiciendis nulla, voluptate
          earum facere voluptatibus laborum a dolore molestias quia in officia
          quisquam quae. Tenetur blanditiis error quisquam voluptatibus
          voluptatem. Omnis dignissimos facere voluptas atque enim asperiores ea
          similique, vitae nihil maiores rerum, maxime corporis dolores!
          Temporibus, fugit! Illo consectetur aperiam saepe eum quasi autem eius
          repellendus ut debitis enim? Molestiae animi necessitatibus tempore,
          nulla aliquid possimus magnam quos sed earum repudiandae ipsum ut
          repellendus dolorum! Expedita itaque dignissimos iusto voluptatum
          maiores doloremque odio eveniet sint eius nisi soluta ad cum inventore
          sapiente magnam nostrum cumque, rerum error enim officiis quae
          distinctio quas beatae reiciendis. Ipsam dolores iusto aliquam sequi
          ducimus, iure autem at similique. Quidem commodi dolorum amet
          excepturi ea facere maxime inventore. Praesentium explicabo labore
          eligendi quasi saepe molestias ut voluptates maiores cum laboriosam,
          nobis ipsam doloribus delectus debitis adipisci eos, molestiae aliquid
          quis. Illo, inventore tempore aut nisi exercitationem amet numquam
          nihil sunt ratione maxime fugiat dolorum enim fugit! Adipisci, harum.
          Beatae non repellendus reprehenderit, nostrum nulla aspernatur eaque
          quisquam sint natus expedita ex, dolorum dolore architecto quaerat,
          obcaecati inventore ea. Doloribus accusamus magni id natus veniam
          quasi? Itaque, non voluptatum praesentium unde nam nisi? Minus dolores
          suscipit maxime architecto repellat magnam labore laudantium nihil
          quod. Vel omnis doloremque ipsam rem, voluptatum molestias
          voluptatibus quae. Delectus maxime dolorem voluptate! Rem similique id
          pariatur molestiae impedit doloribus atque exercitationem officiis
          accusantium ipsum animi magni in, necessitatibus, repudiandae cum
          corrupti fuga deserunt, harum ad eos maxime voluptatum? Similique iure
          facilis temporibus odio dolorum optio. Officiis veniam ex dolorum
          omnis nesciunt, iure, nemo unde atque consectetur expedita aut ratione
          repellendus mollitia sit! Cum ipsam atque temporibus eos laudantium
          officia voluptatum repellat sunt nam dolore harum alias odit
          distinctio fugit sed, enim tempora molestiae eaque fugiat ullam vitae
          quibusdam et. Perspiciatis excepturi atque dolorum natus soluta, cum
          repellendus a commodi obcaecati laudantium suscipit ipsum repellat
          fugiat officiis adipisci. Quia nihil aperiam qui magnam consequuntur
          tenetur, eos autem minus voluptate laborum aspernatur minima
          exercitationem velit necessitatibus adipisci unde ipsum doloremque!
          Atque exercitationem labore eveniet, assumenda a cumque officia
          placeat repellendus natus, architecto quis, omnis incidunt nam eius
          fugiat alias eaque. Dolore modi error consectetur voluptates id.
          Provident, corrupti quisquam illo nisi temporibus vel pariatur hic
          facere sequi, porro vero cumque quos non accusantium at voluptatum
          magnam! Quis nulla deserunt suscipit autem iure cum consectetur fuga
          commodi aperiam ab laudantium aut, impedit mollitia asperiores a
          voluptates. Sequi illo quia perferendis nulla, explicabo molestiae
          modi. Quibusdam cupiditate expedita ducimus facilis, numquam vero
          officia placeat quod, sit deserunt delectus, molestiae asperiores
          illum neque quas! Modi possimus dolore voluptate sunt dolor accusamus
          aspernatur unde ducimus quod error asperiores recusandae, quam
          architecto, suscipit cum, delectus ipsam facilis ex. Iusto consequatur
          amet nesciunt saepe minima dolorum doloremque eaque voluptatem
          perspiciatis quibusdam ratione voluptatum laudantium deleniti, officia
          corporis, facilis hic. Odio iure minima corporis eaque repudiandae
          perferendis nobis, praesentium reprehenderit odit doloremque
          temporibus quod assumenda. Doloribus quos, inventore porro adipisci
          ducimus incidunt nam rem sapiente et labore? Cupiditate debitis
          repudiandae, earum suscipit, illum quo laboriosam quisquam inventore
          vel, doloribus nobis accusamus culpa obcaecati fugiat pariatur nemo?
          Nemo quisquam soluta consequuntur repellat, eos incidunt quidem nisi
          tenetur impedit dolorem cum nobis saepe unde assumenda numquam debitis
          ut, expedita in. Obcaecati, suscipit similique! Nostrum consequatur
          dolor ut quos eum velit ullam eius esse itaque repellat magnam, iure
          necessitatibus exercitationem provident quas ab labore hic officia
          sunt placeat pariatur autem reprehenderit! Ab magni debitis
          cupiditate. Tempora dolor blanditiis magnam corporis illum ipsa ex vel
          distinctio recusandae cumque modi delectus numquam veniam quo suscipit
          aliquid, ab ea odio minus officiis laudantium doloribus possimus
          ipsam? Commodi soluta modi similique adipisci dignissimos laudantium
          fugiat suscipit nesciunt quam minus cum asperiores magni, voluptatum
          nobis alias ex totam quia tenetur! Saepe quidem fuga porro ipsam
          voluptate beatae perspiciatis quisquam quaerat maiores in praesentium
          distinctio inventore officia, animi veniam exercitationem fugiat quae
          modi voluptatum magni natus hic eaque quo! Neque ipsam placeat
          temporibus maiores est, libero rerum eveniet quos sed odio totam iusto
          optio dolorum sunt doloremque porro rem commodi quasi vel, non alias
          fugiat vitae. Iste, vitae dicta temporibus officiis culpa quaerat
          repudiandae recusandae? Cupiditate at, ex tempore, non adipisci,
          incidunt animi sapiente natus excepturi dolorem est voluptates
          distinctio repellendus saepe provident suscipit in nihil dignissimos
          eaque! Velit itaque repellendus facilis rem ducimus! Eveniet fugiat et
          sunt magni. Autem suscipit, in doloribus consequuntur minus modi
          soluta non iste dolor vero fugit quis et culpa cupiditate beatae illum
          eaque maxime commodi. Pariatur, neque illo quos sequi iure molestias
          praesentium vel enim aliquam ad doloribus magni facilis! Illo
          voluptatum, cum provident fugit vitae tempore in, culpa quia voluptate
          impedit eius minus nobis voluptatibus. Ipsam voluptatem facere,
          repellendus voluptates laboriosam tenetur atque consectetur fugit iste
          porro dignissimos repellat necessitatibus in quo sapiente, esse, nobis
          ducimus? Tempora iusto, in repudiandae enim voluptate quo reiciendis
          corporis id provident, dicta soluta vero. Omnis dicta ea temporibus
          officiis, minus reiciendis autem assumenda dolores excepturi accusamus
          libero sapiente atque aliquam minima. Nihil amet consectetur voluptate
          atque ut perferendis explicabo voluptatum temporibus repellat
          officiis? Error amet quisquam placeat itaque? Nam, placeat
          consequuntur pariatur ut veritatis fugiat unde repellat corrupti
          consequatur delectus quos aspernatur possimus maxime, officia
          explicabo est dignissimos. Eos blanditiis accusantium doloremque
          deleniti odio quia sunt sit ratione alias, dignissimos, qui et
          eligendi explicabo ea cupiditate architecto animi ullam voluptatem?
          Commodi, dicta temporibus! Ipsam totam doloremque, repellat cupiditate
          maxime tempora laborum unde, dolorem sequi, autem odit tenetur porro.
          Cupiditate possimus laboriosam voluptatum nam! Ipsa excepturi
          dignissimos aliquam inventore placeat sint delectus non doloribus quos
          quam. Sapiente nobis iusto facilis nulla accusantium nihil eligendi
          fugiat quas culpa voluptatum reprehenderit ratione expedita voluptates
          natus, quidem facere est eos magnam labore, provident incidunt non
          numquam amet. Consequatur sunt culpa quo dolor rerum sit impedit.
          Molestiae fugiat explicabo labore ab necessitatibus, dicta nostrum
          dolorem ullam vero ducimus libero distinctio, quasi dolorum placeat?
          Soluta voluptates rem adipisci ea perferendis reiciendis quam, sunt
          alias. Illum at, aperiam nam reprehenderit enim animi ipsa! Eveniet id
          at quas sit molestias soluta necessitatibus vitae blanditiis, totam
          rerum! Quod, tenetur magni at dignissimos natus possimus eveniet
          dolores, officiis nam in fuga cupiditate repudiandae! Voluptates nulla
          minus, modi eum qui temporibus tempore. Asperiores officia, quod unde
          quo facere inventore, eligendi dolor autem totam corporis voluptates
          ullam ut voluptas. Atque, error corporis accusamus optio eaque
          perspiciatis ipsam totam minima amet ipsum tenetur nesciunt molestiae
          numquam soluta, et, ratione eveniet ex aut vero! Quisquam impedit
          itaque sit nisi. Dolorum in laudantium quas fugiat, dignissimos
          repudiandae natus culpa pariatur exercitationem autem soluta alias
          possimus debitis ratione commodi ex eum nobis dolorem? Dicta, sit?
          Accusamus aperiam nisi dicta possimus consequatur? Velit ab tenetur
          sequi consectetur sed porro dolorem earum explicabo, eaque voluptate,
          est facere facilis alias sapiente odio! Explicabo vitae libero omnis,
          qui recusandae laudantium suscipit architecto tempora eaque excepturi
          sunt neque esse a veniam nulla ut harum hic aliquid delectus. Labore
          distinctio vero dolorem facere quod adipisci perferendis sit et ab
          voluptatibus! Nulla nemo cumque assumenda laborum quos hic unde quae
          non iste, quam maiores tempore accusamus, repellendus temporibus
          voluptatum cum necessitatibus quidem eos porro sit molestias veritatis
          reprehenderit iure cupiditate! Beatae, dolor. Optio adipisci ipsa
          distinctio aperiam ullam quasi repudiandae omnis qui asperiores,
          aliquam facilis, totam et iste? Nobis officia facere inventore ipsa
          nisi minima nesciunt nemo fugiat, molestias cum officiis ducimus, hic
          architecto dolorem blanditiis, consequuntur illum! Consequuntur minima
          iste, eaque voluptates dolores aut itaque qui, doloribus accusantium
          debitis cumque velit tempora laudantium ipsam? Vitae corrupti
          distinctio mollitia tempore soluta tenetur, maiores reprehenderit
          autem nostrum, sit eos consequuntur earum est iusto. Asperiores eos
          corporis porro, dolorem possimus ab nesciunt, delectus voluptate
          mollitia illo iure dolores itaque pariatur aspernatur ut earum eaque
          nihil. Temporibus, nulla dolorum a eum mollitia consequatur cum
          incidunt aspernatur amet ut voluptatem sunt cupiditate dicta. Facere
          cupiditate tenetur dolorum quisquam voluptatum et ea quos unde dolore,
          officiis libero veniam laborum voluptates? Nulla unde quas, repellat
          commodi tempora quam animi, quo quos, incidunt itaque id
          necessitatibus excepturi. Fuga quaerat dolores ab autem assumenda ut,
          laborum excepturi necessitatibus rem, qui repudiandae consectetur sed
          error, officiis quos doloremque impedit exercitationem deleniti animi
          nisi amet ipsa ipsam. Cumque reiciendis velit placeat quibusdam amet,
          molestiae eaque repudiandae! Atque quibusdam qui exercitationem nemo
          pariatur minima sint quia nulla omnis unde tempora quod autem
          architecto praesentium dolorem, doloribus est ratione, iusto tenetur
          laboriosam animi itaque saepe, mollitia asperiores? Dicta odio tenetur
          corporis animi natus ut expedita magnam, aliquam saepe corrupti ipsa
          exercitationem dolor inventore veniam nemo dolore! Vitae aliquid natus
          iste saepe iusto doloremque cumque, voluptate consequatur eius,
          repudiandae veritatis. Quos, quam aspernatur officiis fugiat fugit
          assumenda veniam in reprehenderit non ab. Sit odio ipsum, obcaecati
          facilis dicta libero maxime possimus fugiat error perspiciatis ut modi
          placeat enim rem vitae, animi sed voluptas reiciendis provident. Alias
          maxime quae reprehenderit? Iste ipsum alias optio ut iusto voluptates,
          est praesentium nam rerum? Tenetur suscipit ut deleniti, qui error
          accusamus numquam itaque harum esse aperiam aliquam laudantium quidem
          neque ipsam vel blanditiis perspiciatis! Dolor distinctio blanditiis
          facilis voluptas quam sit tempore dolore amet sunt asperiores hic
          velit, a vero quia voluptatum quis ipsam fuga, placeat minima beatae?
          Excepturi aspernatur mollitia sit ut asperiores rem aperiam doloremque
          assumenda et perspiciatis rerum obcaecati tenetur vel eveniet qui
          cupiditate, eos corrupti pariatur temporibus ipsa quam quisquam quod
          magni! Deserunt praesentium ad officia quibusdam dignissimos esse
          ipsum corporis blanditiis, dolores nam dolor cumque rerum itaque quos
          cupiditate maxime dolorum veniam laborum similique suscipit minus
          perspiciatis. Ut pariatur est commodi natus id maiores quo cum aliquam
          quis molestiae at quos, officiis dignissimos aliquid ab dolores. Ipsa
          autem nisi officiis a magni eligendi similique id in nemo dignissimos
          excepturi animi dolor iure ipsam consequuntur, consectetur veritatis
          enim tempora, officia eum explicabo, ex corporis voluptatum? Sint,
          tempore est. Impedit repudiandae architecto ab maxime necessitatibus
          facilis aperiam blanditiis? Aut animi eveniet facilis molestias modi
          porro itaque numquam illum, dolorum magnam blanditiis eos soluta
          aliquid aperiam quidem delectus repellat, ea ratione harum dignissimos
          sed dolores voluptates? Illo culpa eos reiciendis assumenda
          praesentium cumque atque exercitationem unde, repellat voluptatum eum
          cum eaque, dolorum vitae rerum distinctio ea sapiente corrupti aperiam
          enim obcaecati inventore aliquam tenetur. Perferendis corrupti id,
          laboriosam ratione adipisci provident aut at asperiores distinctio ad
          placeat cumque nam nostrum similique repudiandae minus velit veniam
          illum architecto ea. Quisquam, voluptas asperiores ex perspiciatis
          reprehenderit officiis facere eius deserunt quis neque molestiae ab
          similique debitis ad dolor blanditiis veniam fuga quae, aliquid velit
          odit, atque ipsa in hic. Sunt unde odit quidem, cum in molestiae
          inventore accusamus alias magni voluptatibus ipsam nesciunt itaque
          distinctio dignissimos repellat non placeat architecto nobis
          praesentium temporibus, voluptatem veniam quo necessitatibus. Qui,
          repellendus exercitationem rerum corrupti iure minima doloremque
          architecto odio quod quas suscipit, iste nostrum. Repellat, explicabo
          inventore, eius, sunt repudiandae exercitationem laborum optio dolorum
          rerum excepturi enim. Animi quia nihil voluptatem eius obcaecati quis
          nam ex, quo alias ipsum labore fuga voluptates eligendi atque fugiat
          officiis. Fuga facilis assumenda recusandae, deleniti autem id
          voluptatum ratione totam quaerat, sapiente similique unde! Cupiditate,
          reprehenderit. Laudantium, tempore illo. Sint distinctio neque dolor
          sed sunt? Sunt ut architecto necessitatibus quo voluptatum laudantium
          ratione! Ea itaque dignissimos architecto, dicta consequuntur at
          laboriosam labore quo maxime natus minima inventore explicabo, et
          voluptas est culpa nesciunt praesentium! Natus eius non nisi
          doloremque quam laboriosam ipsa neque, officia nam, aliquam ducimus
          asperiores saepe, consequuntur fugit nemo inventore voluptates sunt!
          Quia, voluptates earum voluptatum dolores ducimus illo voluptas dicta
          reprehenderit ratione deserunt ullam commodi exercitationem ad in
          quae, totam, iure sed quos similique cum odit accusantium inventore
          dignissimos? Deleniti nostrum possimus atque officia nihil deserunt
          doloribus odio voluptas reprehenderit aliquid placeat, eaque debitis,
          beatae ratione corporis autem doloremque quae inventore ducimus natus!
          Quam iure odio suscipit sint voluptate, iste pariatur cupiditate
          delectus voluptas repellendus iusto qui magnam ipsum incidunt quae
          illum sequi non architecto, possimus blanditiis, libero enim adipisci
          provident ea. Tempora dolorem repellat quae libero nam debitis sint
          corrupti distinctio enim, consectetur nulla eligendi, ipsum doloremque
          fuga. Optio magni suscipit a molestiae eos dicta quasi distinctio nam,
          id impedit cumque voluptatum laudantium unde officiis mollitia sequi
          corrupti sed repudiandae necessitatibus quas maiores libero iure rem
          atque! Ex distinctio obcaecati deserunt? Ullam, exercitationem
          reiciendis! Architecto, sequi beatae ad, non eius molestiae sint neque
          dicta fuga eveniet excepturi, assumenda optio nobis consectetur
          blanditiis! Amet labore in recusandae nulla consequuntur optio debitis
          incidunt eaque iste eos maxime voluptate exercitationem repellat,
          nihil deleniti. Ipsum voluptas a, culpa officiis sint tempora saepe
          deleniti nihil fugit esse doloremque cumque repudiandae, quaerat
          adipisci autem eveniet ab animi quod assumenda atque fugiat!
          Reprehenderit minus maxime deserunt consectetur tempora? Laborum
          dolorem tempore exercitationem reprehenderit optio quia modi ad
          molestiae, ea molestias est accusamus. Enim sunt non vitae, laborum
          soluta voluptates ipsam, inventore numquam repudiandae iure,
          consectetur nobis doloribus praesentium iusto ipsa cum quos facilis
          officia voluptatibus. Obcaecati accusamus dolorem culpa provident.
          Libero inventore doloribus vero, repellat reiciendis modi ipsum
          voluptas cumque? Ad molestiae dolor nam dicta soluta? Minima
          cupiditate quisquam sequi nobis quis porro quam nulla excepturi quod
          odit, placeat quo voluptatum totam incidunt ducimus architecto!
          Quisquam ratione ipsa ullam reiciendis culpa laboriosam ducimus nihil
          dolorum earum nisi exercitationem, minima tempore dicta totam eaque
          dolores eveniet eum libero. Et odio nesciunt reiciendis ratione earum
          aliquam molestias eligendi, voluptatem consequuntur dolore, dicta
          consequatur adipisci deleniti architecto, animi quidem tempora. Est,
          ex. Autem, ipsa ullam tempore itaque possimus iure dicta expedita quam
          illum. Reprehenderit maxime in fugit animi nemo voluptatibus nostrum
          aliquid magni culpa illo et ullam quam nobis sint cumque, error
          quaerat veniam vitae natus porro iusto cupiditate, totam dolorem. At
          reprehenderit beatae consectetur provident id quibusdam nemo molestias
          deserunt neque non corporis, reiciendis quis ducimus nobis modi itaque
          repellendus magnam vel ipsum repellat deleniti laborum? Amet,
          similique possimus quo quibusdam quam tempore repudiandae, cupiditate
          dolorum fugit tempora aut! Alias repellat vel nulla laudantium
          molestiae rem sint quam eveniet. Beatae placeat id, quis similique quo
          minus suscipit alias recusandae magnam ipsam esse, fugit rerum
          obcaecati eius enim vel cumque? Maxime, aperiam voluptatibus quas in
          optio, quasi voluptates ad, animi obcaecati architecto quisquam? Quod
          sed quia, dolore cumque repudiandae expedita nisi voluptatibus commodi
          impedit? Laborum, eveniet? Doloremque natus quas cumque iure officiis
          non quidem laborum sapiente, animi quasi expedita aspernatur voluptate
          alias pariatur, nemo maxime. Et ea neque beatae atque illo suscipit
          sapiente! Corrupti quis rem similique deserunt commodi dolorem impedit
          aliquam minus ipsam vero soluta hic voluptatibus repellendus corporis,
          cumque asperiores ex fugit modi suscipit, placeat deleniti earum nam
          illum quasi? Et tempora possimus, facilis ab quos omnis explicabo
          neque quo eaque iste expedita inventore commodi unde nostrum fugit
          quis libero tenetur maxime voluptatem numquam esse quae? Fuga
          adipisci, aspernatur provident, delectus recusandae id nihil ullam sed
          non neque corrupti, blanditiis tempora? Temporibus cum sed hic
          numquam, nesciunt, qui nisi quaerat sunt autem dignissimos sit nihil
          laboriosam. Distinctio molestiae hic tempora et assumenda facilis,
          quas explicabo nam aut corrupti ullam rerum! Magni aliquam enim
          deleniti. Culpa optio assumenda accusamus excepturi consectetur error
          dolores temporibus, id commodi! Ea deleniti at molestiae rem excepturi
          dicta explicabo accusantium eaque impedit exercitationem nam corporis
          vitae asperiores sint expedita, consequatur iure eligendi animi
          voluptas magni accusamus facere doloremque incidunt? Nisi nesciunt
          totam asperiores eaque nulla excepturi recusandae ducimus dolorem,
          natus distinctio dicta ullam quia, ipsum at ipsa dolorum provident.
          Ipsam, aliquid? Explicabo distinctio provident delectus odio, quaerat
          labore temporibus minima aperiam, mollitia perspiciatis voluptate sint
          in, eveniet impedit exercitationem quos enim eaque quidem! Aliquid,
          fugit magni. Facilis quibusdam, repellendus illo odio nemo alias illum
          libero labore dolores magnam debitis esse, eos dolore eaque
          dignissimos velit eveniet impedit enim est temporibus sint reiciendis
          consequuntur sunt! Dignissimos, vitae.
        </h3> */}
      </div>
      <Footer />
    </>
  );
};

export default page;
