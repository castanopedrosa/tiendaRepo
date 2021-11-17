package leafar.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import leafar.app.entity.Producto;

@Repository
public interface ProductoRepository extends JpaRepository<Producto,Long> {

}
