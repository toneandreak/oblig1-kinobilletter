package oblig1.kinobilletter;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {
    @GetMapping("/")
    public String heiVerden(String navn){
        return "Hei Verden" + navn;
    }
}
